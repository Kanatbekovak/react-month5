import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./style.css";

const MyPostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts?limit=5')
            .then(response => {
                setPosts(response.data.posts);
            })
            .catch(error => {
                console.error("Ошибка", error);
            });
    }, []);


    return (
        <div>
            <h2>Мои посты</h2>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="post-card">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <div className="post-footer">
                            <div className="views"><span className="weui--eyes-on-filled"></span>{post.views}</div>
                            <Link to={`/posts/${post.id}`} className="btn-more"> Подробнее</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPostsPage;