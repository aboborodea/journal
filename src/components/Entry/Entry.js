import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Entry = props => {
  const [entry, setEntry] = useState(null)
  const userId = props.user._id

  useEffect(() => {
    axios(`${apiUrl}/entries/${props.match.params.id}`)
      .then(res => setEntry(res.data.entry))
      .catch(console.error)
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
        props.alert({ heading: 'Success', message: 'You deleted an entry!', variant: 'warning' })
        props.history.push('/entries')
      })
      .catch(() => {
        props.alert({ heading: 'Failure', message: 'Something went wrong!', variant: 'danger' })
      })
  }

  if (!entry) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>{entry.title}</h2>
      {userId === entry.owner._id && <Button onClick={handleDelete}>Delete</Button>}
    </div>
  )
}

export default withRouter(Entry)
