import React, { useEffect, useState, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

const Entry = props => {
  const [entry, setEntry] = useState(null)
  const userId = props.user ? props.user._id : null

  useEffect(() => {
    console.log(props.match.params.id)
    axios({
      url: `${apiUrl}/entries/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
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
          message: 'You deleted your journal entry',
          variant: 'warning'
        })
        props.history.push('/entries')
      })
      .catch(() => {
        props.alert({
          heading: 'Error',
          message: 'Something went wrong',
          variant: 'danger'
        })
      })
  }

  if (!entry) {
    return <p>Loading stuff...</p>
  }

  return (
    <div className="container-fluid">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h2 className="entry-title">{entry.title}</h2>
        <h3 className="entry-date">written on {entry.date}</h3>
        <h2 className="entry">{entry.entry}</h2>
        {userId === entry.owner && (
          <Fragment>
            <Button href={`#entries/${props.match.params.id}/edit`} variant="outline-info" className="entry-update">Update</Button>
            <Button onClick={handleDelete} variant="outline-info" className="entry-delete">Delete</Button>
          </Fragment>
        )}
        <Button href={'#/entries'} variant="outline-info" className="entry-back">Back</Button>
      </div>
    </div>
  )
}

export default withRouter(Entry)
