import React, { Fragment } from 'react'

const LandingPage = (props) => {
  console.log('props.user', props.user)
  if (props.user === null) {
    return (
      <div className="landing-page">
      </div>
    )
  } else {
    return (
      <div className="second-view">
        <Fragment>
          <p className="h1">Welcome to Open Thought!</p>
          <br></br>
          <p className="h3" style={{ lineHeight: 1.9 }}>Open Thought is an online journal where you can write freely about your biggest hopes and dreams, your favorite memories, or whatever is on your mind. </p>
          <br></br>
          <p className="h3" style={{ lineHeight: 2.9 }}>Click on Journal Entries on the left to get started.</p>
        </Fragment>
      </div>
    )
  }
}

export default LandingPage
