// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-list">
      <img src={imageUrl} alt={appName} className="app-item-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
