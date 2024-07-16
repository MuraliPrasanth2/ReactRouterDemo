import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

const Article = () => {
    const { id } = useParams();
    const {
        data: article,
        isPending,
        error,
    } = useFetch("http://localhost:3000/articles/" + id);
    const navigate = useNavigate();
    useEffect(() => {
        if (error) {
            navigate("/");
        }
    }, [error, navigate]);
    return (
        <div className="section-container">
            <h2>Article page</h2>
            {isPending ? <div>Loading...</div> : null}
            {error ? <div>{error}</div> : null}
            {article ? (
                <div className="article">
                    <h3>{article.title}</h3>
                    <p>by {article.author}</p>
                    <p>{article.body}</p>
                </div>
            ) : null}
        </div>
    );
};

export default Article;
