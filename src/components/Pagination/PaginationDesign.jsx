import React from "react"
import { Pagination } from "antd"

const petsPerPage = 2

const PaginationDesign = () => {
  return (
    <>
      <div>PaginationDesign</div>
      <Pagination
        current={current}
        onChange={onChange}
        total={totalPages}
        pageSize={petsPerPage}
      />
    </>
  )
}

export default PaginationDesign
