import React from "react"

export const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
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
}

export default Pagination

//verificar com bootstrap
