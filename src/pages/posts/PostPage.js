import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import appStyles from "../../App.module.css";
import Post from "./Post";

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: post }, { data: comments }] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                    axios.get(`/comments/?post=${id}`),
                ]);
                setPost({ results: [post] })
                console.log(post)
            } catch(err){
                console.log(err);
            }
        }
        handleMount();
    }, [id]);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <p>Popular profiles for mobile</p>
                <Post {...post.results[0]} setPosts={setPost} />
                <Container className={appStyles.Content}>
                    Comments
                </Container>
                <Col className="d-none d-lg-block p-0 p-lg-2" lg={4}>
                    Popular profiles for desktop
                </Col>
            </Col>
        </Row>
    );
}

export default PostPage;