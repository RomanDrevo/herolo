import React, {Component} from 'react'

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

export default MovieImg