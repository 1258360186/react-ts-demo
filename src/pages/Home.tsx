import React,{FC} from "react";
import {useNavigate,Link} from "react-router-dom"
const Home:FC = () =>{
    const nav = useNavigate()
    const clickhandler=()=>{
        // nav('/login?a=1')
        nav({
            pathname:'login',
            search:'a=1',
        })
    }

    return (
        <>
        <p>Home</p>
        <button onClick={clickhandler}>Login</button>
        <Link to="/login?a=1">Login</Link>
        </>
    )
}

export default Home