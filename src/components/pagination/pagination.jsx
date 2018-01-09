import React from 'react'

import './pagination.less'

import Traingle from '../traingle'

export default class Pagination extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pageSizeOpen: false
    }
    this.producePage = this.producePage.bind(this)
    this.changePageSizeOpenStatus = this.changePageSizeOpenStatus.bind(this)
  }

  producePage (pageSize, total, pageNo) {
    let list = []
    let pageTotal = Math.ceil(total / pageSize)
    if (pageTotal < 11) {  // 当页数在10或及其以下，则直接全部展示
      for (let i = 1; i <= pageTotal; i++) {
        list.push(<div key={`pagination-${i}`} onClick={() => { this.props.callback(i) }} className={`pagination-num-specific ${i === pageNo ? 'selected' : ''}`}>{i}</div>)
      }
    } else { // 另类展示法
      if (pageNo < 4) {  // 展示种类1     1 2 3 4 ... 100
        list = [
          <div key={`pagination-${1}`} onClick={() => { this.props.callback(1) }} className={`pagination-num-specific ${pageNo === 1 ? 'selected' : ''}`}>{1}</div>,
          <div key={`pagination-${2}`} onClick={() => { this.props.callback(2) }} className={`pagination-num-specific ${pageNo === 2 ? 'selected' : ''}`}>{2}</div>,
          <div key={`pagination-${3}`} onClick={() => { this.props.callback(3) }} className={`pagination-num-specific ${pageNo === 3 ? 'selected' : ''}`}>{3}</div>,
          <div key={`pagination-${4}`} onClick={() => { this.props.callback(4) }} className={`pagination-num-specific ${pageNo === 4 ? 'selected' : ''}`}>{4}</div>,
          <div className='pagination-num-specific pagination-num-other' key='ellipsis-1'>...</div>,
          <div key={`pagination-${pageTotal}`} onClick={() => { this.props.callback(pageTotal) }} className={`pagination-num-specific ${pageNo === pageTotal ? 'selected' : ''}`}>{pageTotal}</div>
        ]
      } else if (pageNo > pageTotal - 3) {
        list = [
          <div key={`pagination-${1}`} onClick={() => { this.props.callback(1) }} className={`pagination-num-specific ${pageNo === 1 ? 'selected' : ''}`}>{1}</div>,
          <div className='pagination-num-specific pagination-num-other' key='ellipsis-1'>...</div>,
          <div key={`pagination-${pageTotal - 3}`} onClick={() => { this.props.callback(pageTotal - 3) }} className={`pagination-num-specific ${pageNo === pageTotal - 3 ? 'selected' : ''}`}>{pageTotal - 3}</div>,
          <div key={`pagination-${pageTotal - 2}`} onClick={() => { this.props.callback(pageTotal - 2) }} className={`pagination-num-specific ${pageNo === pageTotal - 2 ? 'selected' : ''}`}>{pageTotal - 2}</div>,
          <div key={`pagination-${pageTotal - 1}`} onClick={() => { this.props.callback(pageTotal - 1) }} className={`pagination-num-specific ${pageNo === pageTotal - 1 ? 'selected' : ''}`}>{pageTotal - 1}</div>,
          <div key={`pagination-${pageTotal}`} onClick={() => { this.props.callback(pageTotal) }} className={`pagination-num-specific ${pageNo === pageTotal ? 'selected' : ''}`}>{pageTotal}</div>
        ]
      } else {
        list = [
          <div key={`pagination-${1}`} onClick={() => { this.props.callback(1) }} className={`pagination-num-specific ${pageNo === 1 ? 'selected' : ''}`}>{1}</div>,
          <div className='pagination-num-specific pagination-num-other' key='ellipsis-1'>...</div>,
          <div key={`pagination-${pageNo - 1}`} onClick={() => { this.props.callback(pageNo - 1) }} className={`pagination-num-specific`}>{pageNo - 1}</div>,
          <div key={`pagination-${pageNo}`} onClick={() => { this.props.callback(pageNo) }} className={`pagination-num-specific selected`}>{pageNo}</div>,
          <div key={`pagination-${pageNo + 1}`} onClick={() => { this.props.callback(pageNo + 1) }} className={`pagination-num-specific`}>{pageNo + 1}</div>,
          <div className='pagination-num-specific pagination-num-other' key='ellipsis-2'>...</div>,
          <div key={`pagination-${pageTotal}`} onClick={() => { this.props.callback(pageTotal) }} className={`pagination-num-specific ${pageNo === pageTotal ? 'selected' : ''}`}>{pageTotal}</div>
        ]
      }
    }

    return list
  }

  changePageSizeOpenStatus () {
    console.log('changePageSizeOpenStatus')
    this.state.pageSizeOpen = !this.state.pageSizeOpen
    this.setState(this.state)
  }

  render () {
    return (
      <article className='pagination-root'>

        <div className='pagination-pageSize'>
          <div className='pagination-pageSize-cell pagination-pageSize-number'>55</div>
          <div onClick={this.changePageSizeOpenStatus} className='pagination-pageSize-cell pagination-pageSize-btn'>
            <Traingle opened={this.state.pageSizeOpen} />
          </div>
        </div>

        <div className='pagination-num'>
          {/* 左按钮 */}
          <div onClick={() => { this.props.callback(this.props.pageNo > 1 ? this.props.pageNo - 1 : 1) }} className='pagination-num-specific pagination-num-other pagination-num-direct'>
            <div className='pagination-num-direct-forward' />
          </div>
          {/* 数字键 */}
          {this.producePage(this.props.pageSize, this.props.total, this.props.pageNo)}
          {/* 右按钮 */}
          <div onClick={() => { this.props.callback(this.props.pageNo >= Math.ceil(this.props.total / this.props.pageSize) ? Math.ceil(this.props.total / this.props.pageSize) : this.props.pageNo + 1) }} className='pagination-num-specific pagination-num-other pagination-num-direct'>
            <div className='pagination-num-direct-backward' />
          </div>
        </div>
      </article>
    )
  }
}
