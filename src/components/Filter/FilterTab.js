import React from 'react'
import '../../App.css'
import {filterListAction} from '../../actions'
import {connect} from 'react-redux'

const FilterTab = ({tabName, count, filter, filterList}) => {
  return (
    <div
      className="filter__tab"
      onClick={() => filterList(tabName)}
      style={filter === tabName ? {borderBottom: '2px solid #5CC0EF', color: '#5CC0EF'} : {}}>
      <div className="filter__name">
        {tabName.toUpperCase()}
        {count ? <span className="habit-count">{count}</span> : null}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const {filter} = state
  return {
    filter: filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterList: tabName => dispatch(filterListAction(tabName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTab)