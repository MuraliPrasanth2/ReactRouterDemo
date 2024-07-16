import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const Home = () => {
    const {
        data: articles,
        isPending,
        error,
    } = useFetch("http://localhost:3000/articles");
    return (
        <div className="section-container">
            <h2>Home</h2>
            {isPending ? <div>Loading...</div> : null}
            {error ? <div>{error}</div> : null}
            {articles
                ? articles.map((article) => (
                    <div key={article.id} className="article">
                        <h3>{article.title}</h3>
                        <p className="trim">{article.body.slice(0, 100)}</p>
                        <Link to={"/article/" + article.id}>read more...</Link>
                    </div>
                ))
                : null}
        </div>
    );
};

export default Home;
