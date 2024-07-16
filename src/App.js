import "./App.css";
import {
    NavLink,
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <h1>My Articles</h1>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/article/:id" element={<Article />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
