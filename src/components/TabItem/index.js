// Write your code here
import './index.css'

const TabItem = props => {
  const {tabitem, changeActiveTab, isActive} = props
  const {tabId, displayText} = tabitem

  const changeTabitem = () => {
    changeActiveTab(tabId)
  }

  const style = isActive ? 'activeitem' : 'tabitem'

  return (
    <li>
      <button type="button" className={style} onClick={changeTabitem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
