import React from "react"
import { Pagination } from "antd"
import { useState } from "react"

const PaginationDesign = () => {
  const [current, setCurrent] = useState(3)
  const onChange = (page) => {
    console.log(page)
    setCurrent(page)
  }
  return <Pagination current={current} onChange={onChange} total={50} />
}

export default PaginationDesign
