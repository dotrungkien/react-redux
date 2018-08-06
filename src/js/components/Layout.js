import React from 'react'
import { connect } from 'react-redux'

class Layout extends React.Component {
  render () {
    console.log(this.props)
    return null
  }
}

const mapStateToProps = store => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets
  }
}

export default connect(
  mapStateToProps
)(Layout)