import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Col, Grid, Row } from 'react-bootstrap'
import './App.css'
import MoviesList from './components/movies-list/MoviesList'
import loader from './assets/images/loading.svg'


@inject('moviesStore')
@observer
class App extends Component {
  componentDidMount() {
    const { moviesStore } = this.props
    moviesStore.getMovies()
  }

  render() {
    const { moviesStore } = this.props

    if (moviesStore.isLoading) {
      return <img src={loader} className="loader" alt="loading-spinner" />
    }

    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <MoviesList />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
