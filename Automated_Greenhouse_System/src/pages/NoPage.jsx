import React, { useEffect } from 'react'
import NoPageImage from '/nopage.webp'
const NoPage = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found'
  });
  return (
    <>
    <img src={NoPageImage} alt="no page" className=''/>
    </>
  )
}

export default NoPage