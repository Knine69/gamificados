import React from 'react'

import PropTypes from 'prop-types'

import './heading.css'

const Heading = (props) => {
  return (
    <div className={`heading-container ${props.rootClassName} `}>
      <h2 className="heading-heading">{props.Heading}</h2>
    </div>
  )
}

Heading.defaultProps = {
  rootClassName: '',
  Heading: '¿Y si aprendemos jugando?',
}

Heading.propTypes = {
  rootClassName: PropTypes.string,
  Heading: PropTypes.string,
}

export default Heading
