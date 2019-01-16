import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'

@inject('moviesStore')
@observer
class BaseForm extends Component {
  render() {
    const { form, moviesStore } = this.props
    return (
      <form id="movies-form" className="login-form" onSubmit={form.onSubmit}>
        <FormGroup>
          <div className="flex">
            <div className="flex flex-column mr3">
              <label className="mr2" htmlFor={form.$('name').id}>
                {form.$('name').label}
              </label>
              <FormControl
                {...form.$('name').bind()}
              />
              <p className="error">{form.$('name').error}</p>
            </div>

            <div className="flex flex-column">
              <label className="mr2" htmlFor={form.$('category').id}>
                {form.$('category').label}
              </label>
              <FormControl
                {...form.$('category').bind()}
              />
              <p className="error">{form.$('category').error}</p>
            </div>
          </div>

          <div className="flex flex-column">
            <label className="mr2" htmlFor={form.$('imageUrl').id}>
              {form.$('imageUrl').label}
            </label>
            <FormControl
              {...form.$('imageUrl').bind()}
            />
            <p className="error">{form.$('imageUrl').error}</p>
          </div>

          <div className="flex flex-column">
            <label className="mr2" htmlFor={form.$('description').id}>
              {form.$('description').label}
            </label>
            <textarea
              rows="2"
              {...form.$('description').bind()}
            />
            <p className="error">{form.$('description').error}</p>
          </div>

          <div className="flex">
            <div className="flex flex-column mr3">
              <label className="mr2" htmlFor={form.$('rate').id}>
                {form.$('rate').label}
              </label>
              <FormControl
                {...form.$('rate').bind()}
              />
              <p className="error">{form.$('rate').error}</p>
            </div>

            <div className="flex flex-column">
              <label className="mr2" htmlFor={form.$('year').id}>
                {form.$('year').label}
              </label>
              <FormControl
                {...form.$('year').bind()}
              />
              <p className="error">{form.$('year').error}</p>
            </div>
          </div>

          <div className="text-center">
            <button className="action-button mb2 mt3" type="submit" disabled={!form.isValid}>Save changes</button>
            <div className="pointer" onClick={moviesStore.closeForm}>Close</div>
          </div>

          <p className="error">{form.error}</p>
          <p className="error">{form.success}</p>

        </FormGroup>
      </form>
    )
  }
}

export default BaseForm
