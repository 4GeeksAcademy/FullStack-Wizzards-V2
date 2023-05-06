import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


export const WizzardDetail = ( ) => {
    

    const navigate = useNavigate()

    const { id } = useParams();

    const [ wizzard , setWizzard ] = useState(); 

    useEffect(()=>{
        async function searchWizzardByID(WizzardId){
            try{
                let resp = await fetch(`https://hp-api.onrender.com/api/character/${WizzardId}`)
                let data = await resp.json()
                console.log(data[0])
                setWizzard(data[0])
        
            }catch(err){
                console.log(err)
            }
        }
        searchWizzardByID(id)
    },[])

    return (
        <>
            <h1> { wizzard && wizzard.name }</h1>
            { wizzard && <img src={wizzard.image} alt={wizzard.name} />}
            <h2>
                { wizzard && wizzard.house }
                <br/>
                { wizzard && wizzard.gender }
            </h2>
            
            <button className="btn btn-primary" onClick={() => navigate("/")}>  Go Home! </button>
        </>
    )
}