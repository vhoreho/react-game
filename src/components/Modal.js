import React from 'react'


function Modal({win, onClick}) {
  return (
    <div className='modal'>
      <h1>Победитель {win}</h1>
      <button onClick={onClick}>Новая игра</button>
    </div>
  )
}

export default Modal
