import React from 'react'
import Certificate from '../templates/Certificate'
import EnergyBill from '../templates/EnergyBill'
import MusicEvent from '../templates/MusicEvent'

function TemplateList() {
  return (
    <>
        <div className="py-3">
          <Certificate/>
        </div>

        <div className="py-3">
          <EnergyBill/>
        </div>

        <div className="py-3">
          <MusicEvent/>
        </div>

    </>
  )
}

export default TemplateList