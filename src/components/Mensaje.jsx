import React from 'react'

const Mensaje = ({childre, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>{childre}</div>
  )
}

export default Mensaje