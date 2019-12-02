import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'

const Entries = props => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/entries`)
      .then(response => {
        setEntries(response.data.entries)
      })
      .then(() => props.alert({ heading: 'Success', message: 'You got entries', variant: 'success' }))
      .catch(console.error)
  }, [])

  const entriesJsx = entries.map(entry => (
    <ListGroup.Item key={entry._id} as={'a'} href={`#entries/${entry._id}`}>
      {entry.title}
    </ListGroup.Item>
  ))

  return (
    <div>
      <h1>Entries</h1>
      <Link to="/create-book">Add a Book</Link>
      <ListGroup>
        {entriesJsx}
      </ListGroup>
    </div>
  )
}

export default Entries
