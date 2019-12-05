import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import Grid from '@material-ui/core/Grid'

const EntryForm = (props) => {
  console.log('from props', props)
  const { entry, handleChange, handleSubmit, cancelPath } = props
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  const handleDateChange = date => {
    setSelectedDate(date)
    console.log('date', date)
    props.handleChangeDate(date)
  }

  return (
    <div>
      <div className="entry-form">

        <Form onSubmit={handleSubmit}>
          <Button className="entry-button" type="button" href={cancelPath} variant="outline-info">Cancel</Button>
          <Button className="entry-button" type="submit" variant="outline-info">Submit</Button>
          <p>Create a new journal entry! Give your entry and title, date, and content!</p>
          <Form.Group className="textbox" controlId="title">
            <Form.Control className="t1"
              placeholder="Entry Title"
              value={entry.title}
              name="title"
              onChange={handleChange}
              type="text"
            />
          </Form.Group>

          <MuiPickersUtilsProvider className="textbox" utils={DateFnsUtils}>
            <Grid>
              <KeyboardDatePicker className="textbox t1"
                disableToolbar
                variant="inline"
                collapseOnSelect
                format="MM/dd/yyyy"
                margin="normal"
                placeholder="Date"
                id="date-font"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>

          <form controlId="entry" className="entry-font">
            <div>
              <textarea value={entry.entry} name="entry" onChange={handleChange}/>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default EntryForm
