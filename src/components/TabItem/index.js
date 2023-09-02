import './index.css'

const TabItem = props => {
  const {tabItem, onClickTab, isActive} = props
  const {tabId, displayText} = tabItem
  const onChangeTabItem = () => {
    onClickTab(tabId)
  }

  const activeTabBtnClsName = isActive ? 'tab-item-btn1' : ''

  return (
    <li>
      <button
        type="button"
        className={`tab-item-btn ${activeTabBtnClsName}`}
        onClick={onChangeTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
