import React from 'react'

const LandingPage = (props) => {
  console.log('props.user', props.user)
  if (props.user === null) {
    return (
      <div className="landing-page">
        <p className="h">Welcome to Open Thought!</p>
        <p className="h2">Open Thought is an online journal where you can write freely about your biggest hopes and dreams, your favorite memories, or whatever is on your mind. </p>
      </div>
    )
  } else {
    return (
      <div className="second-view">
      </div>
    )
  }
}

export default LandingPage
