import axios from 'axios'
import ApiError from './ApiError'
import Movie from '../models/Movie'

export default class ApiGateway {
  async getMovies() {
    try {
      const resp = await axios.get('http://x-mode.co.il/exam/allMovies/allMovies.txt')
      return resp.data.movies.map((json) => Movie.reconstituteFrom(json))
    } catch (err) {
      this._handleApiError(err)
    }
  }

  async getMovieDetails(movieId) {
    try {
      return await axios.get(`http://x-mode.co.il/exam/descriptionMovies/${movieId}.txt`)
    } catch (err) {
      this._handleApiError(err)
    }
  }

  _handleApiError(err) {
    if (axios.isCancel(err)) {
      throw new ApiError(`Api request cancelled. error: ${err.message}`)
    }

    throw new ApiError(`Api request failed. error: ${err.message}`)
  }
}
