import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    

    useEffect(() => {
        axios.get(`https://dummyjson.com/posts/${id}`)
            .then(res => {
                setPost(res.data);
              
            })
            .catch(err => {
                console.error(err);
              
            });
    }, [id]);


    if (!post) {
        return (
            <div>
                <h2>Пост не найден</h2>
                <button onClick={() => navigate('/posts')} className="btn-more">Вернуться к постам</button>
            </div>
        );
    }

    return (
        <div className="post-detail-wrapper">
            <button onClick={() => navigate(-1)}>Назад</button>
            <div>
                <h1>{post.title}</h1>
                    <div>{post.tags ? post.tags.map(t => `#${t} `) : ''}
                    </div>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostDetail;