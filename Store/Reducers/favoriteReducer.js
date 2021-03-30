
const initialState = { favoritesFilm: [] }//state initiale(state par default)

function toggleFavorite(state = initialState, action){

    let nextState;

    switch(action.type){

        case 'TOGGLE_FAVORITE':                             
            const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id);
            if(favoriteFilmIndex !== -1){
                /* Ici le film est deja dans les favorite et donc on le supprime*/
                nextState = {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
                }
            }
            else {
                /* Le film n'existe pas dans les favorites, alors on l'ajoute*/
                nextState = {
                    ...state, 
                    favoritesFilm: [...state.favoritesFilm, action.value ] //On modifie son type, ajouter le nous film

                }
            }
            return nextState || state;
        default:
            return state
    }
}

export default toggleFavorite;