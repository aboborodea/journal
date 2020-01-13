import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import StarBorderIcon from '@material-ui/icons/StarBorder'

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
        console.log('response', response)
        setEntries(response.data.entries)
      })
      .then(() => props.alert({ heading: 'Success', message: 'You got journal entries!', variant: 'success' }))
      .catch(() => props.alert({ heading: 'Not able to retrieve journal entries', message: 'Sorry this isn\'t working', variant: 'success' }))
  }, [])

  const entriesJsx = entries.map(entry => {
    if (entry.owner._id === props.user._id) {
      return (
        <ListGroup.Item className="entry-list"
          key={entry._id}
          as={'a'}
          href={`#entries/${entry._id}`}
        >
          <StarBorderIcon />
          <div className="title">
            {entry.title}
          </div>
          <br></br>
          <div className="written-by">
            written by: {entry.owner.email}
          </div>
        </ListGroup.Item>
      )
    } else {
      return (
        <ListGroup.Item className="entry-list"
          key={entry._id}
          as={'a'}
          href={`#entries/${entry._id}`}
        >
          <div className="written-by">
            {entry.title}
          </div>
          <br></br>
          <div className="written-by">
            written by: {entry.owner.email}
          </div>
        </ListGroup.Item>
      )
    }
  })

  console.log('user', props.user)

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="entries-title">Journal Entries</h1>
          <Link className="entries-link" to="/create-entries">New Journal Entry</Link>
        </div>
        <h4 className="subheading"><StarBorderIcon />YOUR ENTRY (You can only edit and delete your own entries)</h4>
        <ListGroup>
          {entriesJsx}
        </ListGroup>
      </div>
    </div>
  )
}

export default Entries
