import React from 'react';
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";


export function App() {
    //SE PUEDE PASAR LA FUNCION COMO PARAMETRO
    const formatUserName = (userName) => `@${userName}`
    //TAMBIEN SE PUEDEN PASAR Elementos
    return (
        <section className="App">
            <TwitterFollowCard
                formatUserName={formatUserName}
            >
                Bruno Zenobio
            </TwitterFollowCard>

            <TwitterFollowCard
                formatUserName={formatUserName}
                userName="brunozenobio"
            >
                Ezequiel Bagllietto
            </TwitterFollowCard>

            <TwitterFollowCard
                formatUserName={formatUserName}
                 userName="bruno.zenobio">
                Carlos Roberto
            </TwitterFollowCard>

        </section>
    )
}

// SI QUIERO PASAR TODAS LAS PROPS COMO UN OBJETO

// const variable ={isFollowing:true,userName:'brunozenobio'}

//ADENTRO DE LA tARGETA {...variable}

