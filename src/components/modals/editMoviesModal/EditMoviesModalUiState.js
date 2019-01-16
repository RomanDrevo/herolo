import MobxReactForm from 'mobx-react-form'
import { fields, plugins } from '../form/fields'


export default class EditMoviesModalUiState {
  constructor(apiGateway, moviesStore) {
    const hooks = {
      onSubmit() {

      },
      onSuccess(form) {
        const movie = form.values()
        movie.id = moviesStore.selectedMovie.id
          if (moviesStore.movies.some((e) => e.name === movie.name)) {
              moviesStore._openMovieExistSwal()
              return null
          }
          movie.name = moviesStore._titleCase(movie.name)
        moviesStore._updateMovie(movie)
        moviesStore.closeForm()
      },
      onError(form) {
        console.log('All form errors', form.errors())
      },
    }
    this.form = new MobxReactForm({ fields }, { plugins, hooks })
  }
}
