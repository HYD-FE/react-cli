import React from 'react'

import './pagination.less'

import Traingle from '../traingle'
 /**
 * props record
 * @function  reset  -- 复位函数，点击选择页面后，你可以用来处理页面
 * @argument {number} pageNo  -- 页面
 * @argument {number}  pageSize -- 页面大小
 * @argument {number}  total  -- 总条数
 */
export default class Pagination extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pageSizeOpen: false,
      pageSizeTypeList: [10, 20, 50, 100],
      goNum: ''  // 记录要去的页
    }

    this.producePage = this.producePage.bind(this)
    this.pageSizehandler = this.pageSizehandler.bind(this)
    this.changePageSizeOpenStatus = this.changePageSizeOpenStatus.bind(this)
    this.goNumChangeHandler = this.goNumChangeHandler.bind(this)
    this.goHandler = this.goHandler.bind(this)
  }
  /**
   * 生成数字键的函数
   * @param {number} pageSize
   * @param {number} total
   * @param {number} pageNo
   */
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

  /**
   * 选中每页展示的数据数量的处理函数
   * @param {event Object} e
   * @param {number} pageSize
   */
  pageSizehandler (e, pageSize) {
    e.stopPropagation()
    let totalPageNo = Math.ceil(this.props.total / pageSize)   // 总页数
    let pageNo = getNumberInRange(this.props.pageNo, { low: 1, high: totalPageNo })
    this.props.callback(pageNo, pageSize)
    this.state.pageSizeOpen = false

    this.props.reset && this.props.reset()
  }

  /**
   * 改变pageSize显示的状态
   */
  changePageSizeOpenStatus () {
    this.state.pageSizeOpen = !this.state.pageSizeOpen
    this.setState(this.state)
  }
  /**
   * 输入了去的页面数记录下来
   * @param {event Object} e
   */
  goNumChangeHandler (e) {
    this.state.goNum = e.target.value
    this.setState(this.state)
  }
  /**
   * 点击 Go触发的函数
   */
  goHandler () {
    let totalPageNo = Math.ceil(this.props.total / this.props.pageSize)   // 总页数
    let pageNoShouldGo = getNumberInRange(this.state.goNum, {low: 1, high: totalPageNo})
    this.props.callback(pageNoShouldGo)
  }

  render () {
    return (
      <article className='pagination-root'>

        {/* pageSize (Select action) */}
        <div onClick={this.changePageSizeOpenStatus} className='pagination-pageSize'>
          <div className='pagination-pageSize-cell pagination-pageSize-number'>
            <div>{this.props.pageSize}</div>
            <div className={`${!this.state.pageSizeOpen ? 'hidden' : ''} pagination-pageSize-type`}>
              {this.state.pageSizeTypeList.map((e, i) => {
                return (<div className={`${this.props.pageSize === e ? 'selecedPageSize' : ''}`} key={`pageSize-${i}`} onClick={(event) => { this.pageSizehandler(event, e) }}>{e}</div>)
              })}
            </div>
          </div>
          <div className='pagination-pageSize-cell pagination-pageSize-btn'>
            <Traingle opened={this.state.pageSizeOpen} />
          </div>
        </div>

        {/* pageNo (Display and select) */}
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

        {/* pageGo (Go to a pageNo) */}
        <div className='pagination-go'>
          <div className='pagination-go-cell pagination-go-input'>
            <input type='text' onChange={this.goNumChangeHandler} />
          </div>
          <div onClick={this.goHandler} className='pagination-go-cell pagination-go-btn'>Go</div>
        </div>
      </article>
    )
  }
}

/**
 * 区间取值
 * @param {number} number
 * @param {Object} param1
 */
function getNumberInRange (number, {low, high}) {
  number = number < low ? low : number
  number = number > high ? high : number
  return number
}
