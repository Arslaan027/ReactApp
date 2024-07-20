import React from 'react'

const Head = () => {
    console.log("Headder Called")
  return (
    <div>
      <h1>Head</h1>
    </div>
  )
}

export default React.memo(Head);
