import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import EntryForm from './EntryForm'

const EntryEdit = (props) => {
  const [entry, setEntry] = useState({ title: '', date: '', entry: '' })
  // useState sets default
  const [updated, setUpdated] = useState(false)

  // happens when useState starts
  useEffect(() => {
    axios({
      url: `${apiUrl}/entries/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(res => setEntry(res.data.entry))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setEntry(entry => ({ ...entry, [event.target.name]: event.target.value }))
  }

  const handleChangeDate = event => {
    console.log('event', event)
    // event.persist()
    // setEntry(entry => ({ ...entry, [entry.date]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/entries/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { entry }
    })
      .then(response => {
        props.alert({ heading: 'Success', message: 'You updated a journal entry', variant: 'success' })
        setUpdated(true)
      })
      .catch(() => props.alert({ heading: 'Error', message: 'That didn\'t work', variant: 'danger' }))
  }

  if (updated) {
    return <Redirect to={`/entries/${props.match.params.id}`} />
  }

  return (
    <EntryForm
      entry={entry}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleChangeDate={handleChangeDate}
      cancelPath={`#entries/${props.match.params.id}`}
    />
  )
}

export default withRouter(EntryEdit)
