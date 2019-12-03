import React, { useEffect, useState, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

const Entry = props => {
  const [entry, setEntry] = useState(null)
  const userId = props.user ? props.user._id : null

  useEffect(() => {
    axios(`${apiUrl}/entries/${props.match.params.id}`)
      .then(res => setEntry(res.data.entry))
      .catch(() => props.alert({
        heading: 'That didn\'t work',
        message: 'Couldn\'t retrieve the requested journal entry',
        variant: 'danger'
      }))
  }, [])

  const handleDelete = event => {
    axios({
      url: `${apiUrl}/entries/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        props.alert({
          heading: 'Success',
          message: 'You deleted a journal entry',
          variant: 'warning' })
        props.history.push('/')
      })
      .catch(() => {
        props.alert({
          heading: 'Error',
          message: 'Something went wrong',
          variant: 'danger' })
      })
  }

  if (!entry) {
    return <p>Loading stuff...</p>
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h2>{entry.title}</h2>
        <h3 className="h5">written on {entry.date}</h3>
        {userId === entry.owner && (
          <Fragment>
            <Button href={`#entries/${props.match.params.id}/edit`} variant="primary" className="mr-2">Update</Button>
            <Button onClick={handleDelete} variant="danger" className="mr-2">Delete</Button>
          </Fragment>
        )}
        <Button href="#/" variant="secondary">Back</Button>
      </div>
    </div>
  )
}

export default withRouter(Entry)
