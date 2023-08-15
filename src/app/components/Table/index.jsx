import React from 'react'

import * as S from './styled'

const TableComp = ({dataSource, columns, ...props}) => {
  return (
    <S.TableCus dataSource={dataSource} columns={columns} {...props}/>
  )
}

export default TableComp