import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({to, text}) => (
  <li>
    <Link to={to}>{text}</Link>
  </li>
)

const d = [
  {to: '/', text: 'main'},
  {to: '/sports', text: 'redux http get sports'},
  {to: '/counter', text: 'redux counter'},
  {to: '/dinamic-import', text: 'dinamic import'},
]

export default () => (
  <div>
    <p>Hello react SSR</p>
    <ul>
      {d.map(x => <Item {...x} key={x.to} />)}
    </ul>
  </div>
)