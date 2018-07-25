import React from 'react'
import { connect } from 'react-redux'
import { mapProps, compose } from 'recompose'
import Helmet from 'react-helmet'


import { fetch } from '../redux/actions'


class SportList extends React.Component {
  componentWillMount() {
    this.props.getSports()
  }

  render() {
    const { getSports, sports } = this.props

    return (
      <div>
      <Helmet
        title="Sports"
      />
        <ul>
          {sports.map(sport => <li key={sport.id}>{sport.name}</li>)}
        </ul>
      </div>
    )
  }
}


export default compose(
  connect(
    (state) => ({ sports: state.sports }),
    { getSports: fetch.sports }
  ),
  // mapProps(props => {
  //   ({props})
  //   return props
  // }),
)(SportList)