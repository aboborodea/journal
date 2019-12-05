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
    <div className="container-fluid">
      <div className="entry-form">

        <Form onSubmit={handleSubmit}>
          <Button className="entry-button" type="button" href={cancelPath} variant="outline-info">Cancel</Button>
          <Button className="entry-button" type="submit" variant="outline-info">Submit</Button>

          <Form.Group controlId="title">
            <Form.Control className="textbox"
              placeholder="Journal Title"
              value={entry.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>

          <MuiPickersUtilsProvider className="textbox" utils={DateFnsUtils}>
            <Grid>
              <KeyboardDatePicker className="t1"
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                placeholder="Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>

          <form controlId="entry">
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
