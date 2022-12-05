import React from 'react'
import '../Overlay/Overlay.css'
/*import Expand from './Expand.js'
import '../Cards/Cards'*/

const Overlay = ({ children, close, isOpen }) => {
  return (
    <div className='overlay' style={isOpen? {display:'flex'}:{}}onClick={close}>
        {children}
    </div>
  )
}

export default Overlay
