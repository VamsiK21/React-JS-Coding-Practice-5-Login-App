// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickBtn = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          {<Message isLoggedIn={isLoggedIn} />}

          {isLoggedIn ? (
            <Logout logout={this.onClickBtn} />
          ) : (
            <Login login={this.onClickBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
