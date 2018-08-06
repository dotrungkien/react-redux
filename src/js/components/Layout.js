import React from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'
import { fetchTweets } from '../actions/tweetsActions'

import axios from 'axios'

class Layout extends React.Component {
  componentWillMount () {
    axios.post('http://rest.learncode.academy/api/reacttest/tweets',{id: 1, text: "WTF"})
    axios.post('http://rest.learncode.academy/api/reacttest/tweets',{id: 4, text: "aaaa"})
    this.props.fetchUser()
  }

  fetchTweets () {
    this.props.fetchTweets()
  }

  render () {
    const { user, tweets } = this.props

    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }
    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

    return <div>
        <h1>{user.name}</h1>
        <ul>{mappedTweets}</ul>
      </div>
  }
}

const mapDispatchToProps = {
  fetchUser,
  fetchTweets
}

const mapStateToProps = store => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)