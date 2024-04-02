import React, { useEffect } from 'react'

const NoPage = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found'
  });
  return (
    <>
        <img src="/nopage.webp" alt="no page" style={{width: '100%', height: '100%'}}/>
    </>
  )
}

export default NoPage