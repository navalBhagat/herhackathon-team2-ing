import React from 'react'

interface Props { 
    title: string; 
    image: string;
}

export const Picture: React.FC<Props> = (props) => {
  return (
    <div className='picture-container'>
        <div className='picture-title'>{props.title}</div>
        <div className='picture-image-container'>
            <img src={props.image} className='image' />
        </div>
    </div>
  )
}
