import React from 'react'
import Pagination from '../pagination'

import './table.less'

export default class WTable extends React.Component {
  constructor (props) {
    super(props)
    this.getCellType = this.getCellType.bind(this)
  }

  /**
   * 单元格类型
   * @param {number} index  -- 坐标
   * @param {number} length -- 长度
   * @param {*} type  大类型   top  and  bottom
   */
  getCellType (index, length, type) {
    let lasttype = ''

    if (index === 0) {
      lasttype = 'left'
    } else if (index === length - 1) {
      lasttype = 'right'
    }

    return `no${type ? `-${type}` : ''}${lasttype ? `-${lasttype}` : lasttype}`
  }

  render () {
    return (
      <article className='table--root'>
        <article className='table-root'>
          <section className='table-header'>
            {this.props.header.map((e, i) => {
              return (<div className={`table-cell ${this.getCellType(i, this.props.header.length, 'top')}`} key={`header${i}`}>{e.text}</div>)
            })}
          </section>

          <section className='table-body'>
            {this.props.data.map((_e, _i) => {
              return (
                <div className='table-body-row' key={`body${_i}`}>
                  {this.props.header.map((e, i) => {
                    return (<div style={{ maxWidth: this.props.cellMaxWidth }} className={`table-cell ${this.getCellType(i, this.props.header.length, _i + 1 === this.props.data.length ? 'bottom' : '')}`} key={`header${i}`}>{_e[e.name]}</div>)
                  })}
                </div>
              )
            })}
          </section>

        </article>
        <article className='table-footer'>
          <Pagination reset={this.props.reset} callback={this.props.selectHandler} pageNo={this.props.pagination.pageNo} pageSize={this.props.pagination.pageSize} total={this.props.pagination.total} />
        </article>
      </article>
    )
  }
}
