// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, updateBalance} = props
  const {value} = details
  const onUpdateBalance = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button type="button" onClick={onUpdateBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
