import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Entries = props => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    axios({
      url: apiUrl + '/entries',
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(response => {
        setEntries(response.data.entries)
      })
      .then(() => props.alert({ heading: 'Success', message: 'You got journal entries!', variant: 'success' }))
      .catch(() => props.alert({ heading: 'Not able to retrieve journal entries', message: 'Sorry this isn\'t working', variant: 'success' }))
  }, [])

  const entriesJsx = entries.map(entry => (
    <ListGroup.Item
      key={entry._id}
      as={'a'}
      href={`#entries/${entry._id}`}
    >
      {entry.title}
    </ListGroup.Item>
  ))

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="entries-title">My Journal Entries</h1>
          <Link className="entries-link" to="/create-entries">New Journal Entry</Link>
        </div>
        <ListGroup>
          {entriesJsx}
        </ListGroup>
      </div>
    </div>
  )
}

export default Entries
