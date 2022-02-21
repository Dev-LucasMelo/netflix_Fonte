const API_KEY = "bbcdebbcc1512ed08ad163b7df833526";
const API_BASEURL = "https://api.themoviedb.org/3";


/* 
-originais netflix
-recomendados {trending}
-em alta  (top rated)
-ação
-comedia
-terror
-romance
-documentarios
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASEURL}${endpoint}`);
    const json = await req.json();
    return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomelist : async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                itens: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                itens: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY} `)
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'romance',
                itens: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (movieID,type) => {
        let info = {};

        if(movieID) {
            switch (type) {
                case "movie" :
                    info = await basicFetch(`/movie/${movieID}?language=pt-BR&api_key=${API_KEY} `)
                break;
                case "tv":
                    info = await basicFetch(`/tv/${movieID}?language=pt-BR&api_key=${API_KEY} `)
                break;
                default:
                    info = null
                    break
            }
        }

        return info;
    }
}