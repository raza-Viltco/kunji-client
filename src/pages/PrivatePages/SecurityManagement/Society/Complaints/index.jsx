import React from 'react'
import OpenCases from './openCases'
import CloseCases from './closeCases'
import "./Openclose.css"

function Complaints() {
  return (
    <div className='col-sm-12 backgroundcover pt-3 pb-2 '>
        <div className="col-sm-12 px-2 py-3">
          <h5><b>Complaints</b></h5>
      </div>
      <div className='col-sm-12 py-2'>
      <OpenCases />
      </div>
      <div className='col-sm-12 py-2'>
      <CloseCases />
      </div>
    </div>
  )
}

export default Complaints