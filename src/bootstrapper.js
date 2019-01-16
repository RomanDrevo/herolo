import ApiGateway from './api/ApiGateway'
import MoviesStore from './stores/MoviesStore'
import EditMoviesModalUiState from './components/modals/editMoviesModal/EditMoviesModalUiState'
import AddMoviesModalUiState from './components/modals/addMovieModal/AddMovieModalUiState'

const bootstrapper = () => {
  const apiGateway = new ApiGateway()
  const moviesStore = new MoviesStore(apiGateway)
  const editMoviesModalUiState = new EditMoviesModalUiState(apiGateway, moviesStore)
  const addMoviesModalUiState = new AddMoviesModalUiState(apiGateway, moviesStore)

  return {
    moviesStore, editMoviesModalUiState, addMoviesModalUiState,
  }
}

export default bootstrapper
