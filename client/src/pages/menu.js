import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Li = styled.li`
  list-style-type: thai;
`


const Item = ({to, text}) => (
  <Li>
    <Link to={to}>{text}</Link>
  </Li>
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