import './App.css';
import {Link} from "boom-router";
import {Routes} from "./Routes.tsx";

function App() {
    return (
        <div className="App container">
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/faq">FAQ</Link>
            </nav>

            <main>
                <Routes/>
            </main>
        </div>
    );
}

export default App
