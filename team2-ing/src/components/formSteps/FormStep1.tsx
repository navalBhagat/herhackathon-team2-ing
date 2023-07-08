import React from 'react'

interface Props { 
    onNext: () => void; 
  }
  

export const FormStep1: React.FC<Props> = (props) => {
  return (
    <div>
        <button onClick={props.onNext} className='nextbutton'>Continue</button>
        <h2>Financial Information</h2>
        <span className='divider' />
    </div>
  )
}
