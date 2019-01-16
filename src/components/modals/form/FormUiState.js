import MobxReactForm from 'mobx-react-form'
import { fields, plugins } from './fields'


export default class FormUiState {
  constructor(apiGateway, moviesStore) {
    const hooks = {
      onSubmit() {

      },
      onSuccess(form) {
        const movie = form.values()
        movie.id = Math.floor(Math.random() * 100000) + 1

        if (moviesStore.movies.some((e) => e.name === movie.name)) {
          moviesStore._openMovieExistSwal()
          return null
        }
        movie.name = moviesStore._titleCase(movie.name)
        moviesStore._addMovie(movie)

        form.clear()
        moviesStore.closeAddMovieForm()
      },
      onError(form) {
        console.log('All form errors', form.errors())
      },
    }

    this.form = new MobxReactForm({ fields }, { plugins, hooks })
  }
}
