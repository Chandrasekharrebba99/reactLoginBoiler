import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isloginform: true, name: '', email: '', password: ''}

  fetchData = async () => {
    const apiUrl = 'http://localhost:8580/flights'
    const response = await fetch(apiUrl)
    const data = await response.json()
  }

  toggleFormType = () => {
    const {isloginform} = this.state
    this.setState({isloginform: !isloginform})
  }

  signUpDetails = () => {
    const {name, email, password} = this.state
    return (
      <>
        <input type="text" name="name" placeholder="Name" value={name} />
        <input type="email" name="email" placeholder="Email" value={email} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
        />
      </>
    )
  }

  logInDetails = () => {
    const {email, password} = this.state
    return (
      <>
        <input type="email" name="email" placeholder="Email" value={email} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
        />
      </>
    )
  }

  render() {
    // this.fetchData()
    const {isloginform, name, email, password} = this.state
    console.log(isloginform)
    return (
      <div>
        <form>
          <h1>{isloginform ? 'Login' : 'Sign Up'}</h1>

          {isloginform ? this.signUpDetails() : this.logInDetails()}

          <button type="submit">{isloginform ? 'Login' : 'Sign Up'}</button>

          <p>
            {isloginform
              ? "Don't have an account? Sign up here."
              : 'Already have an account? Login here.'}
          </p>
          <button type="button" onClick={this.toggleFormType}>
            {isloginform ? 'Sign Up' : 'Login'}
          </button>
        </form>
      </div>
    )
  }
}

export default Home
