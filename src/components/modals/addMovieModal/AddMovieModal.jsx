import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { inject, observer } from 'mobx-react/index'
import BaseForm from "../form/BaseForm";

@inject('addMoviesModalUiState')
@observer
class AddMovieModal extends Component {
  render() {
    const { addMoviesModalUiState } = this.props
    const { form } = addMoviesModalUiState

    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BaseForm form={form}/>
          </Modal.Body>
          <Modal.Footer />
        </Modal.Dialog>
      </div>
    )
  }
}

export default AddMovieModal
