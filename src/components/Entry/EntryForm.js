import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const EntryForm = (props) => {
  const { entry, handleChange, handleSubmit, cancelPath } = props
  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h2>Add a Journal Entry</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="Enter your entry title"
              value={entry.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="author">
            <Form.Label>Date</Form.Label>
            <Form.Control
              placeholder="01-01-2019"
              value={entry.author}
              name="date"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="entry">
            <Form.Label>Journal Entry</Form.Label>
            <Form.Control
              placeholder="Start writing here..."
              value={entry.originalLanguage}
              name="entry"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" variant="primary">Submit</Button>
          <Button type="button" href={cancelPath} variant="secondary" className="ml-2">Cancel</Button>
        </Form>
      </div>
    </div>
  )
}

export default EntryForm
