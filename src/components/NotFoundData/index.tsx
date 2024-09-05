import React from 'react'
import NotFoundStyle from './style'
import images from 'src/assets/image'

interface NotFoundProps {
    content?: React.ReactNode;
}

const NotFound:React.FC<NotFoundProps> = ({content}) => {
  return (
    <NotFoundStyle>
        <div className='viewContent'>{content}</div>
       <img alt="" className="notFoundIMG" src={images.notFound} />
    </NotFoundStyle>
  )
}

export default NotFound
