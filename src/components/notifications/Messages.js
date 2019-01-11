import React from 'react'
import PropTypes from 'prop-types'

const Messages = ( props ) => {
   const { messages } = props
   return (
      <ul>
      {messages.map(message => (
         <li key={message.time}>{message.body}</li>
      ))}
      </ul>
   )
}

Messages.propTypes = {
   messages: PropTypes.arrayOf(
      PropTypes.shape({
         body: PropTypes.string,
         time: PropTypes.date,
      })
   ),
}

export default Messages