import React, { useState, useEffect } from 'react';
import Pie from './compoents/Pie';
import Bmap from './compoents/Bmap'

export default props => {
  return (
    <div className="App_border">
      {/* <Pie></Pie> */}
      <Bmap></Bmap>
    </div>
  )
}
