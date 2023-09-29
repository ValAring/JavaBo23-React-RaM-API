import Header from "./Header";
import CharacterCard from './CharacterCard.tsx';
import { DB } from "./db";
import {useState} from "react";

export default function Home () {
    const [data, setData] = useState(DB);

    return (
        <>
            {data && (
                    <>
                        <Header/>
                        <input /><button>Search</button>
                        <h2>Rick & Morty Charaktere</h2>
                        {data.map((item) => <CharacterCard
                            key = {item.id}
                            character = {item}
                        />)}

                    </>
                )
            }
        </>
    )
}