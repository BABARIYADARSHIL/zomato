import React from 'react'
import { LoadingProps } from '../../types/Loading';

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <>
          <div {...props} role="status">
              <span className="sr-only"></span>
          </div>
    </>
  )
}

export default Loading;