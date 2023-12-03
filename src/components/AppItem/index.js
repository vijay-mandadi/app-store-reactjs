// Write your code here
import './index.css'

const AppItem = props => {
  const {appitem} = props
  const {appName, imageUrl} = appitem

  return (
    <li className="app">
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
