import React from 'react'

function Footer() {
  let date = new Date().getFullYear();
  return (
    <>
        <div className="fixed-bottom container-fluid">
            {date} all rights reserved to EmailChampion.
        </div>
    </>
  )
}

export default Footer