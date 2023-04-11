import React from 'react';
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";


export function App() {
    //SE PUEDE PASAR LA FUNCION COMO PARAMETRO
    const formatUserName = (userName) => `@${userName}`
    //TAMBIEN SE PUEDEN PASAR Elementos

    const users =[
        {
            userName:'brunozenobio',
            name: 'Bruno Zenobio',
            isFollowing:false,
        },
        {
            userName:'bruno.zenobio',
            name: 'Ezequiel Baglietto',
            isFollowing:true,
        },
        {
            userName:'brunozenobio4',
            name: 'Carlos Roberto',
            isFollowing:true,
        },
    ]

    return (
        <section className="App">
            {
                users.map(({userName,name,isFollowing})=>{
                    return (
                        <TwitterFollowCard
                            key = {userName} //INDENTIFICADOR UNICO PARA EL ELEMENTO
                            userName={userName}
                           
                            isFollowing={isFollowing}
                            >
                                 name={name}
                            </TwitterFollowCard>
                    )  
                })
            }
            
        </section>
    )
}

// SI QUIERO PASAR TODAS LAS PROPS COMO UN OBJETO

// const variable ={isFollowing:true,userName:'brunozenobio'}

//ADENTRO DE LA tARGETA {...variable}

