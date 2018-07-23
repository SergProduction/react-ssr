import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({to, text}) => (
  <li>
    <Link to={to}>{text}</Link>
  </li>
)

const d = [
  {to: '/', text: 'main'},
  {to: '/page1', text: 'page 1'},
  {to: '/page2', text: 'page 2'},
  {to: '/page3', text: 'page 3'},
]

export default () => (
  <div>
    <p>Hello react SSR</p>
    <ul>
      {d.map(x => <Item {...x} key={x.to} />)}
    </ul>
  </div>
)