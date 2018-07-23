import React from 'react'
import { tap } from 'ramda'


var sayX = x => console.log('x is ' + x)
tap(sayX, 100)

export default () => (
  <p>This is page 3 ! it is dinamic import module</p>
)