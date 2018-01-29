import React from 'react'
import { connect } from 'react-redux'

import {WholeTable} from '@comps'

import './index.less'

@connect((state, props) => ({
  state2: state,
  props2: props
}))

export default class TableDemo extends React.Component {
  constructor(props, context) {
    super(props)
    this.state = {
      header: [{ text: '姓名', name: 'name' }, { text: '年龄', name: 'age' }, { text: '年级', name: 'class' }, { text: '成绩', name: 'mark' }],
      data: [
        { name: 'dinglei无敌党风建设路口附近的时空裂缝剑荡四方接口了的技术开发都是垃圾开放空间', age: '27', class: '小学3年级', mark: '96' },
        { name: 'yaoran', age: '16', class: '学前班', mark: '22' },
        { name: 'huguangnan', age: '22', class: '幼儿园1级', mark: '58' }
      ],
      pagination: {
        pageSize: 10,
        pageNo: 5,
        total: 1000
      }
    }
    this.selectHandler = this.selectHandler.bind(this)
  }

  selectHandler(changedPageNo,changedPageSize){  //  事件回调函数
    let data = [
      { name: 'tingting', age: '25', class: '小学3年级', mark: changedPageNo },
      { name: 'yalin', age: '25', class: '学前班', mark: changedPageNo },
      { name: 'wanjiao', age: '25', class: '幼儿园1级', mark: changedPageNo }
    ]
    console.log()
    this.state.pagination.pageNo = changedPageNo
    changedPageSize&&(this.state.pagination.pageSize = changedPageSize)
    this.state.data = data
    this.setState(this.state)
  }

  render() {
    return (
      <article className="table">
        唯坚持和耐心不负所爱,加油！！！
        <WholeTable cellMaxWidth='100px' selectHandler={this.selectHandler.bind(this)} header={this.state.header} data={this.state.data} pagination={this.state.pagination}></WholeTable>
      </article>
    )
  }
}

//console.log(React)

// Table.contextTypes = {
//   router: React.PropsTypes.object
// }