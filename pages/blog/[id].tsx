import React from "react";
import { useRouter } from "next/router";

const Blog = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Blog con id {router.query.id}</h1>
        </div>
    );
};

export default Blog;