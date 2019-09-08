import React from 'react';
import * as moviesActions from './redux/actions/moviesActions';
import './App.css';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class MoviesFrom80s extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            movies: [],
            show: false,
            currentRec: undefined
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow(i) {
        this.setState({ show: true, currentRec: i });
    }

    handleHide(i) {
        this.setState({ show: false,
        currentRec: i});
    }

    componentDidMount() {
        this.props.action.loadMovies().catch((error) => {
            throw error;
        });
    }

    render() {

        return (

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <h1 className='col moviesTitle'>{'Movies from the 80s'}</h1>
                        {this.props.movies.map((movie, index) => { return (
                             <ButtonToolbar key={index}>
                                <Image
                                    className="col img"
                                    src={movie.imageUrl}
                                    alt={movie.title}
                                    onClick={() => {this.handleShow(index)}}
                                    key={index}
                                />

                                 {this.state.currentRec !== undefined &&
                                     <Modal {...this.props}
                                            show={this.state.show}
                                            onHide={() => {this.state.currentRec.handleHide(index)}}
                                         // dialogClassName="custom-modal"
                                            className='modal'>
                                         <Modal.Header closeButton>
                                             <Modal.Title id="contained-modal-title-lg">
                                                 {index}
                                                 {movie.title}
                                             </Modal.Title>
                                         </Modal.Header>
                                         <Modal.Body>
                                             <h6>Released date: {movie.releaseDate}</h6>
                                             <h6>Movie ranking: {movie.rank}</h6>
                                             <p>{movie.synopsis}</p>
                                         </Modal.Body>
                                         <Modal.Footer>
                                             <Button onClick={() => {this.handleHide(index)}}>Close</Button>
                                         </Modal.Footer>
                                     </Modal>}

                            </ButtonToolbar>)}
                        ) }
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
        );

    }

}

MoviesFrom80s.prototypes = {
    movies: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
   return {
       action: bindActionCreators(moviesActions, dispatch)
   }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesFrom80s);
