//CONFIGS E COMPONENTS

import React,{useEffect, useState} from 'react';
import './App.css';
import Featuremovie from './components/featuremovie';
import Tmdb from './tmdb';

import MovieRow from './components/MovieRow';
import Header from './components/header';


// COD

export default () => {
    
  const[FeatureData,SetFeatureData] = useState(null)
  const[movielist,Setmovielist] = useState([])
  const[BlackHeader,SetBlackHeader] = useState(false)


  useEffect(() => {
    const LoadALL = async () => {
     
      let list = await Tmdb.getHomelist();
      Setmovielist(list)
      

      let originals = list.filter(i=>i.slug === 'originals')
      let randomchosen = Math.floor(Math.random() * originals[0].itens.results.length -1)
      let chosen = originals[0].itens.results[randomchosen]
      let choseninfo = await Tmdb.getMovieInfo(chosen.id, "tv")
     SetFeatureData(choseninfo)
    }
    LoadALL();
  },[] )

useEffect(()=> {
  const scroll = () => {
    if(window.scrollY > 50 ) {
        SetBlackHeader(true)
    } else {
      SetBlackHeader(false)
    }
  }
  window.addEventListener('scroll', scroll)

  return () => {
    window.removeEventListener('scroll',scroll)
  }
},[])


    return (
      <div className='page' >
          <Header black={BlackHeader} />
          {
            FeatureData && <Featuremovie item={FeatureData}/>
          }

        <section className='lists' >
          {movielist.map((item, key)=>(
              <MovieRow key={key} title={item.title} items={item.itens} />
          ))}     
        </section>
        <footer>
            Direitos de imagem para Netflix <br/>
            Dados pegos do site themoviedb.org

        </footer>

        {movielist.length <= 0 && 
          <div className='loading' >
              <img src="https://www.rchandru.com/images/portfolio/modals/m-loading.gif" alt="carregando" />
          </div>
        }
      </div>
    );
}


