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

/*export const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav arial-label="PageNavigation">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <div key={number}>
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </div>
        ))}
      </ul>
    </nav>
  )
}*/
