import React from 'react'
import { Link } from 'react-router-dom'

const BackLink = ({className, to}) => {
  return (
    <Link className={className} to={to}> {'<'}Back</Link>
  )
}

export default BackLink