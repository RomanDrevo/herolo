import { observable, action, runInAction, computed } from 'mobx'


export default class MoviesStore {
  constructor(apiGateway) {
    this._apiGateway = apiGateway
  }

    @observable isLoading = false
    @observable movies = []
    @observable search = ''
    @observable selectedMovie = null
    @observable getMoviesError = null
    @observable getMovieDetailsError = null
    @observable isEditMovieFormOpen = false
    @observable isAddMovieFormOpen = false
    @observable isRemoveMovieSwalOpen = false
    @observable isMovieExistSwalOpen = false


    @action
    openAddMovieForm = () => {
        runInAction(() => {
            this.isAddMovieFormOpen = true
        })
    }

    @action
    openEditMovieForm = (movie) => {
        runInAction(() => {
            this.isEditMovieFormOpen = true
        })
        this._setSelectedMovie(movie)
    }

    @action
    closeForm = () => {
      runInAction(() => {
        this.isAddMovieFormOpen = false
        this.isEditMovieFormOpen = false
      })
    }

    @action
    openRemoveMovieSwal = (movie) => {
      runInAction(() => {
        this.isRemoveMovieSwalOpen = true
      })
      this._setSelectedMovie(movie)
    }

    @action
    closeRemoveMovieSwal = () => {
      runInAction(() => {
        this.isRemoveMovieSwalOpen = false
      })
    }

    @action
    removeMovie = (movie) => {
      const movies = this.filteredMovies
      const index = movies.findIndex((x) => x.id === movie.id)
      movies.splice(index, 1)
      this.movies = movies
      this.closeRemoveMovieSwal()
    }

    @action
    closeMovieExistSwal = () => {
      this.isMovieExistSwalOpen = false
    }

    @action
    async getMovies() {
      this.isLoading = true
      try {
        const movies = await this._apiGateway.getMovies()
        movies.map((movie) => {
          this.getMovieDetails(movie.id)
            .then((res) => runInAction(() => {
              const mov = res.data
              this.movies.push(mov)
            }))
        })
      } catch (e) {
        console.log({ e })
        this.getMovieDetailsError = e
      } finally {
        this.isLoading = false
      }
    }

    async getMovieDetails(movieId) {
      this.isLoading = true
      try {
        return await this._apiGateway.getMovieDetails(movieId)
      } catch (e) {
        console.log({ e })
        this.getMovieDetailsError = e
      } finally {
        this.isLoading = false
      }
    }

    @computed get filteredMovies() {
      return this.movies.filter((movie, index, self) => index === self.findIndex((newMovie) => (
        newMovie.id === movie.id && newMovie.name === movie.name
      )))
    }

    _updateMovie = (movie) => {
        const foundIndex = this.filteredMovies.findIndex((x) => x.id === movie.id)
        this.filteredMovies[foundIndex] = movie
    }

    _setSelectedMovie = (movie) => {
        this.selectedMovie = movie
    }

    _addMovie = (movie) => {
        const movies = this.filteredMovies
        movies.unshift(movie)
        this.movies = movies
        this.closeForm()
        this.closeMovieExistSwal()
    }

    _openMovieExistSwal = () => {
        this.isMovieExistSwalOpen = true
    }

    _titleCase = (str) => {
      const splitStr = str.toLowerCase().split(' ')
      for (let i = 0; i < splitStr.length; i += 1) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
      }
      return splitStr.join(' ')
    }
}
