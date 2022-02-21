import React from 'react';
import './MovieRow.css'
import { MdNavigateBefore,MdNavigateNext } from "react-icons/md";
import { useState } from 'react';

export default ({title,items}) => {
    const [scrollx,setscrollx] = useState(0)

    const handleleftarrow = ( ) =>{
        let x = scrollx + Math.round(window.innerWidth / 2)
        if(x > 0) {
               x = 0 
        } 
        setscrollx(x)
    }

    const handlerightarrow = () => {
        let x = scrollx - Math.round(window.innerWidth / 2)
        let listw = items.results.length * 150
        if ((window.innerWidth - listw) > x ) {
            x = (window.innerWidth - listw) - 60
        }
        setscrollx(x)
    }

    return (
        <div className='movieRow'> 
          <h2>{title}</h2> 
        <div className='movieRow--left' onClick={handleleftarrow}  >
            <MdNavigateBefore style={{fontSize: 50}} /> 
        </div>
        <div className='movieRow--right' onClick={handlerightarrow} >
            <MdNavigateNext style={{fontSize: 50}} />
        </div>



          <div className='movieRow--listarea' >

            <div className='movieRow--list' style={{
                width: items.results.length * 150,
                marginLeft: scrollx
               
               
            }} >
                {items.results.length > 0 && items.results.map((item,key)=> (
                    <div className='movieRow--item' key={key} >
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.name} />
                    </div>
                ))}
            </div>

          </div>
        </div>
    )


}