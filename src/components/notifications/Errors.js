import React from 'react'
import PropTypes from 'prop-types'

const Errors = ( props ) => {
   const { errors } = props
   return (
      <ul>
         { errors.map( errors => (
            <li key={ errors.time }>{ errors.body }</li>
         ))
         }
      </ul>
   )
}

Errors.propTypes = {
   errors: PropTypes.arrayOf(
      PropTypes.shape({
         body: PropTypes.string,
         time: PropTypes.date,
         status: PropTypes.number,
      })
   ),
}

export default Errors