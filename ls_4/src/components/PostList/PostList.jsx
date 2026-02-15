import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      console.error("Ошибка", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = (id) => {
    setPosts(prev => prev.filter(p => p.id !== id));
  };

  if (loading) return <div className="loader">Загрузка ленты</div>;

  return (
    <div className="post-container">
      <h1 className="main-title">Лента публикаций DZ4</h1>
      <div className="post-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className={`status-tag ${post.status ? 'active' : 'inactive'}`}>
              {post.status ? "Проверено" : "Черновик"}
            </div>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
            <div className="tags-container">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>
            <div className="post-stats">
              <div className="reactions">
                <span className="likes"><span className="icon-park-outline--like"></span>{post.reactions.likes}</span>
                <span className="dislikes"><span className="icon-park-outline--dislike"></span>{post.reactions.dislikes}</span>
              </div>
              <div className="views"><span className="weui--eyes-on-filled"></span>{post.views}</div>
            </div>

            <button className="delete-btn" onClick={() => deletePost(post.id)}>Удалить из ленты</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;