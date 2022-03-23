import React from 'react'
import { Button } from 'react-bootstrap'

const Btn = (props) => {
  return (
    <div> 
      {/* <button  variant="danger"  className='btn'>{props.children}</button> */}
    <Button variant="danger"  >{props.children}</Button></div>
  )
}

export default Btn