import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [isSending, setIsSending] = useState(false);


  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/posts");
      const enri = res.data.posts.map((post, index, array) => ({
        ...post,
        status: index < array.length / 2,
      }));
      setPosts(enri);
    } catch (err) {
      console.error("Ошибка при получении", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  const addPost = async (e) => {
    e.preventDefault();

    if (!newTitle.trim() || !newBody.trim()) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    setIsSending(true);

    try {
      const res = await axios.post("https://dummyjson.com/posts/add", {
        title: newTitle,
        body: newBody,
        userId: 1,
      });

      if (res.status === 200 || res.status === 201) {
        alert("Пост успешно добавлен на сервер!");
        
        const postToAdd = {
          ...res.data,
          status: true, 
          reactions: { likes: 0, dislikes: 0 },
          views: 0,
          tags: ["new"]
        };

        setPosts(prev => [postToAdd, ...prev]);

        setNewTitle("");
        setNewBody("");
      }
    } catch (err) {
      console.error("Ошибка", err);
      alert("Не удалось отправить пост");
    } finally {
      setIsSending(false);
    }
  };


  const deletePost = (id) => {
    setPosts(prev => prev.filter(p => p.id !== id));
  };

  if (loading) return <div className="loader">loading…</div>;

  return (
    <div className="post-container">
      <section className="form-section">
        <h2>Добавить новый пост DZ5</h2>
        <form onSubmit={addPost} className="add-post-form">
          <input type="text" placeholder="Заголовок" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
          <textarea placeholder="Текст поста" value={newBody} onChange={(e) => setNewBody(e.target.value)}/>
          <button type="submit" disabled={isSending}>
            {isSending ? "Отправка" : "Опубликовать"}
          </button>
        </form>
      </section>

      <hr/>


      <h1 className="main-title">Лента публикаций DZ4</h1>
      
      <div className="post-grid">
        {posts.map((post) => (
          <div key={post.id} className={`post-card ${post.status ? 'border-true' : 'border-false'}`}>
            <div className={`status-tag ${post.status ? 'active' : 'inactive'}`}>
              {post.status ? "Проверено" : "Черновик"}
            </div>
            
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
            
            <div className="tags-container">
              {post.tags?.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>

            <div className="post-stats">
              <div className="reactions">
                <span className="likes"><span className="icon-park-outline--like"></span>{post.reactions?.likes || 0}</span>
                <span className="dislikes"><span className="icon-park-outline--dislike"></span>{post.reactions?.dislikes || 0}</span>
              </div>
              <div className="views"><span className="weui--eyes-on-filled"></span>{post.views || 0}</div>
            </div>

            <button className="delete-btn" onClick={() => deletePost(post.id)}>Удалить из ленты</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;