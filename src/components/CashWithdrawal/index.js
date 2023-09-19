// Write your code here
import {Component} from 'react'

import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updateBalance = value => {
    const {amount} = this.state
    this.setState({amount: amount - value})
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="withdrawal-card">
          <div className="profile-container">
            <div className="profile-pic-letter">S</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="amount">
              {amount}
              <br />
              <span>In Rupees</span>
            </p>
          </div>

          <div>
            <p className="withdraw">WithDraw</p>
            <p className="para">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denomination-list">
            {denominationsList.map(each => (
              <DenominationItem
                details={each}
                key={each.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
