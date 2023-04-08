import {useState} from 'react';//HOOKS REACT AÑADIR FUNCIONANLIDAD A LOS COMPONENTES


export function TwitterFollowCard({children,formatUserName,userName='unknow'}) {
    const [isFollowing,setIsFollowing] = useState(false);
    const handleClick = ()=>{
        setIsFollowing(!isFollowing);
    }


    const text = isFollowing ? 'Siguiento' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button' 
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img  className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="El avatar" />
                <div  className='tw-followCard-info'>
                    <strong >{children}</strong>
                    <span  className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                   {text}
                </button>
            </aside>
        </article>
    )
    
}


//PODRIA PONER COMO PROP CHILDREN EN LUGAR DE NAME Y POR EJEMPLO 
//ENTRE LA APERTURA Y CIERRE DE LA CARTA PONER TEXTO O COMPONENTES COMO 
// H1 ETC