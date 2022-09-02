// Write your code here
import {Component} from 'react'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  clickButton50 = () => {
    const {balance} = this.state
    console.log('kk')
    this.setState({balance: balance - 50})
  }

  clickButton100 = () => {
    const {balance} = this.state
    console.log('kk')
    this.setState({balance: balance - 100})
  }

  clickButton200 = () => {
    const {balance} = this.state
    console.log('kk')
    this.setState({balance: balance - 200})
  }

  clickButton500 = () => {
    const {balance} = this.state
    console.log('kk')
    this.setState({balance: balance - 500})
  }

  render() {
    const {balance} = this.state
    return (
      <div className="container">
        <div className="profile-name-cart">
          <h1 className="name-start-letter">s</h1>
          <p className="name">Sarah willians</p>
        </div>
        <div className="balance-cart">
          <p className="balance">Your Balance</p>
          <div className="amount-cart">
            <p className="amount-rupee">{balance}</p>
            <p>In Rupees</p>
          </div>
        </div>
        <p className="withdraw">Withdraw</p>
        <p className="choose-rupees-text">CHOOSE SUM (IN RUPEES)</p>
        <ul className="button-cart">
          <li>
            <button onClick={this.clickButton50}>50</button>
          </li>
          <li>
            <button onClick={this.clickButton100}>100</button>
          </li>
          <li>
            <button onClick={this.clickButton200}>200</button>
          </li>
          <li>
            <button onClick={this.clickButton50}>500</button>
          </li>
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
