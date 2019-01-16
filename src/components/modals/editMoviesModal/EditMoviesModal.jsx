import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { inject, observer } from 'mobx-react/index'
import BaseForm from "../form/BaseForm";

@inject('editMoviesModalUiState', 'moviesStore')
@observer
class EditMoviesModal extends Component {
  componentDidMount() {
    const { moviesStore, editMoviesModalUiState } = this.props
    const { form } = editMoviesModalUiState
    const { selectedMovie } = moviesStore
    form.set({ id: selectedMovie.id })
    form.set({ name: selectedMovie.name })
    form.set({ category: selectedMovie.category })
    form.set({ imageUrl: selectedMovie.imageUrl })
    form.set({ description: selectedMovie.description })
    form.set({ rate: selectedMovie.rate })
    form.set({ year: selectedMovie.year })
  }

  render() {
    const { editMoviesModalUiState } = this.props
    const { form } = editMoviesModalUiState

    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Edit Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BaseForm form={form} />
          </Modal.Body>
          <Modal.Footer />
        </Modal.Dialog>
      </div>
    )
  }
}

export default EditMoviesModal
