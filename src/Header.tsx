import { Link } from "react-router-dom";

export default function Home () {

    return (
        <>
            <h1>Rick and Morty Charactere</h1>
            <nav>
                <Link to={"/"}>
                    <button>Home</button>
                </Link>
                <Link to={"/characters"}>
                    <button>
                        Characters
                    </button>
                </Link>
            </nav>
        </>
    )
}