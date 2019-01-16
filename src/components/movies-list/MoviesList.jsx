import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'
import SweetAlert from 'sweetalert2-react'
import './MoviesList.css'
import MovieDetails from '../movie-details/MovieDetails'
import EditMoviesModal from '../modals/editMoviesModal/EditMoviesModal'
import AddMovieModal from '../modals/addMovieModal/AddMovieModal'


@inject('moviesStore')
@observer
class MoviesList extends Component {
  render() {
    const { moviesStore } = this.props
    const { filteredMovies } = moviesStore

    return (
      <div>
        <div className="flex justify-between items-baseline mt4 mb4">
          <h1> Movies List</h1>
          <div
            onClick={moviesStore.openAddMovieForm}
            className="action-button add-button"
          ><Glyphicon className="mr2" glyph="plus" />Add Movie
          </div>
        </div>
        {
          filteredMovies.map((movie) => (
            <MovieDetails key={movie.id} movie={movie} />
          ))
        }

        {
          moviesStore.isEditMovieFormOpen ?
            <EditMoviesModal />
            :
            null
        }

        {
          moviesStore.isAddMovieFormOpen ?
            <AddMovieModal />
            :
            null
        }

        <SweetAlert
          warning
          showCancelButton
          show={moviesStore.isRemoveMovieSwalOpen}
          title="Are you sure?"
          text=""
          onConfirm={() => moviesStore.removeMovie(moviesStore.selectedMovie)}
          cancelButtonText="No, keep it"
          onCancel={moviesStore.closeRemoveMovieSwal}
        />

        <SweetAlert
          warning
          showCancelButton={false}
          show={moviesStore.isMovieExistSwalOpen}
          title="Movie with this name already exists!"
          text=""
          onConfirm={moviesStore.closeMovieExistSwal}
        />

      </div>
    )
  }
}

export default MoviesList
