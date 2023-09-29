import {DB} from './db.tsx';
import {useState} from "react";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Home.tsx';
import Header from './Header.tsx';
import Characters from './Characters.tsx';

export default function App(){
    //const [data, setData] = useState(DB);

    function searchCharacter (){

    }

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/characters"} element={<Characters/>}/>
            </Routes>

        </>
    );
}
