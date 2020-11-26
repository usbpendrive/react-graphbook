import React, { Component } from 'react';

const posts = [{
    id: 1,
    text: 'Sauerkraut can be brushed with grey ginger, also try whisking the loaf with sour milk.',
    user: {
        avatar: '/uploads/avatar1.png',
        username: 'Test User'
    }
}, {
    id: 2,
    text: 'Masters, visitors, and boundless sources will always protect them.',
    user: {
        avatar: '/uploads/avatar2.png',
        username: 'Test User 2'
    }
}]

export default class App extends Component {
    state = {
        posts: posts
    };

    render() {
        const { posts } = this.state;

        return (
            <div className="container">
                <div className="feed">
                    {posts.map((post, i) =>
                        <div key={post.id} className="post">
                            <div className="header">
                                <img src={post.user.avatar} />
                                <h2>{post.user.username}</h2>
                            </div>
                            <p className="content">
                                {post.text}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
