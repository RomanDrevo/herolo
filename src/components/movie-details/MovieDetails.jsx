import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Col, Row} from 'react-bootstrap'
import './MovieDetails.css'

class MovieImg extends Component{
    state={
        imgUrl: this.props.movie.imageUrl
    }
    render(){
        const {movie} = this.props
        return (
            <img onError={this.handleOnError} className="movie-img" alt={movie.name} src={this.state.imgUrl}/>
        )
    }
    handleOnError = () => {
        this.setState({imgUrl: require('../../assets/images/movie.jpg')})
    }
}

@inject('moviesStore')
@observer
class MovieDetails extends Component {
    render() {
        const {movie, moviesStore} = this.props

        return (
            <Row className="movie-details-wrapper mt5 jumbotron">
                <Col sm={3}>
                    <div className="movie-img-wrapper">
                        <MovieImg movie={movie}/>
                        {/*<img onError={()=> console.log(`cant load img for ${movie.name}`)} className="movie-img" alt={movie.name} src={movie.imageUrl}/>*/}
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="movie-description flex flex-column">
                        <h2>{movie.name}</h2>
                        <div className="flex movie-details">
                            <h5 className="mr2">Hour: <b>{movie.hour}</b></h5>
                            <h5 className="mr2">Category: <b>{movie.category}</b></h5>
                            <h5 className="mr2">Rate: <b>{movie.rate}</b></h5>
                            <h5 className="mr2">Year: <b>{movie.year}</b></h5>
                        </div>
                        <p className="">
                            {movie.description}
                        </p>
                        <div className="flex">
                            <div onClick={() => moviesStore.openEditMovieForm(movie)} className="action-button mr3">Edit
                                Movie
                            </div>
                            <div onClick={() => moviesStore.openRemoveMovieSwal(movie)} className="action-button">Delete
                                Movie
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default MovieDetails
