import MobxReactForm from 'mobx-react-form'
import { fields, plugins } from '../fields'


export default class EditMoviesModalUiState {
  constructor(apiGateway, moviesStore) {
    const hooks = {
      onSubmit() {

      },
      onSuccess(form) {
        const movie = form.values()
        movie.id = moviesStore.selectedMovie.id
        moviesStore._updateMovie(movie)
        moviesStore.closeEditMovieForm()
      },
      onError(form) {
        console.log('All form errors', form.errors())
      },
    }
    this.form = new MobxReactForm({ fields }, { plugins, hooks })
  }
}