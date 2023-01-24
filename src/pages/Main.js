import './Main.css'
import React, { useState } from 'react';
import header from '../components/header'
import Query from '../components/select'
import introduce from '../components/introduce'

function Main() {
  return (
    <div className="Main">
      {header()}
      <body>
        {Query()}
        <h1>Find info with tag!</h1>
        {introduce()}
      </body>
    </div>
  )
}

export default Main