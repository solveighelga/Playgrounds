import React from 'react'
import '../Overlay/Overlay.css'
import Expand from './Expand.js'
import '../Cards/Cards'

const Overlay = ({ children, close }) => {
  return (
    <div className='overlay' onClick={close}>
        {children}
    </div>
  )
}

export default Overlay
