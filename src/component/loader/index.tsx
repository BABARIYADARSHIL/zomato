import React from 'react'

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> { }

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