import React from 'react';
import './header.css'

export default ({black}) => {
    return(
        <header className={black ? 'black':  ''} >
            <div className='header--logo' >
                <a href="/">
                    <img src="https://logospng.org/download/netflix/logo-netflix-2048.png" alt="" />
                </a>
            </div>
            <div className='header--user' >
                <a href="/">
                    <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="" />
                </a>
            </div>
        </header>
    )
}