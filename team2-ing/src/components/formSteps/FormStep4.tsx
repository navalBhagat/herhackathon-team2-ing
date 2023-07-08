import React from 'react'

interface Props { 
    onPrevious: () => void;
  }
  

export const FormStep4: React.FC<Props> = (props) => {
  return (
    <div>
        <button onClick={props.onPrevious} className='backbutton'>Go Back</button>
        <h2>Financial Information 4</h2>
        <span className='divider' />
        <input value="Submit" type="submit" />
    </div>
  )
}
