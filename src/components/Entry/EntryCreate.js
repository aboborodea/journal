import React, { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import EntryForm from './EntryForm'

const EntryCreate = (props) => {
  const [entry, setEntry] = useState({ title: '', date: '', entry: '' })

  const handleChange = event => {
    event.persist()
    setEntry({ ...entry, [event.target.name]: event.target.value })
  }

  const handleDateChange = value => {
    setEntry({ ...entry, date: value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/entries`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { entry }
    })
      .then(response => {
        props.alert({
          heading: 'Success',
          message: 'You created a journal entry',
          variant: 'success'
        })
        props.history.push(`/entries/${response.data.entry._id}`)
      })
      .catch(() => props.alert({
        heading: 'Error',
        message: 'Please fill in all fields.',
        variant: 'danger'
      }))
  }

  return (
    <EntryForm
      entry={entry}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleChangeDate={handleDateChange}
      cancelPath='#entries/'
    />
  )
}

export default withRouter(EntryCreate)
