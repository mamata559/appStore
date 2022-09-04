// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const buttonClassName = isActive ? 'button1 active' : 'button1'

  return (
    <li className="list-item">
      <button
        type="button"
        onClick={onClickTabItem}
        className={buttonClassName}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
