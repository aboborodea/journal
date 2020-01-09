import React from 'react'

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
        <p className="">Welcome to Open Thought!</p>
        <p className="">Open Thought is an online journal where you can write freely about your biggest hopes and dreams, your favorite memories, or whatever is on your mind. </p>
      </div>
    )
  }
}

export default LandingPage
