import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const EntryForm = (props) => {
  const { entry, handleChange, handleSubmit, cancelPath } = props
  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h2 className="entries-title">Journal Entry</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Control
              placeholder="Journal Title"
              value={entry.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="author">
            <Form.Control
              placeholder="01-01-2019"
              value={entry.date}
              name="date"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="entry">
            <Form.Control
              placeholder="Journal Entry"
              value={entry.entry}
              name="entry"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" variant="outline-info">Submit</Button>
          <Button type="button" href={cancelPath} variant="outline-info" className="ml-2">Cancel</Button>
        </Form>
      </div>
    </div>
  )
}

export default EntryForm
