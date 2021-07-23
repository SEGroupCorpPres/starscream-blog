import React from "react";
import PostList from "../components/postlist";
import Layout from "../components/layout";
import "./pages.css"

const Home = () => {
    return (
        <div>
            <Layout>
                <PostList />
            </Layout>
        </div>
    )
}

export default Home