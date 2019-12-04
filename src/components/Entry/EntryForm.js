import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const EntryForm = (props) => {
  const { entry, handleChange, handleSubmit, cancelPath } = props
  return (
    <div className="container-fluid">
      <div className="entry-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Control className="textbox-line1"
              placeholder="Journal Title"
              value={entry.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="author">
            <Form.Control className="textbox-line1"
              placeholder="01-01-2019"
              value={entry.date}
              name="date"
              onChange={handleChange}
            />
          </Form.Group>
          <form controlId="entry">
            <div className="textarea" value={entry.entry} name="entry" onChange={handleChange}>
              <textarea>Whats on your mind today?</textarea>
            </div>
          </form>
          <Button className="entry-button" type="submit" variant="outline-info">Submit</Button>
          <Button className="entry-button" type="button" href={cancelPath} variant="outline-info">Cancel</Button>
        </Form>
      </div>
    </div>
  )
}

export default EntryForm
