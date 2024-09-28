import React, { useMemo } from "react"
import PropTypes from "prop-types"

import TableContainer from "components/Common/TableContainer"

function ProductDataTable({ data, onEdit, onDelete }) {
  const columns = useMemo(
    () => [
      {
        Header: "Sr. No",
        accessor: (_, rowIndex) => rowIndex + 1,
        id: 'sr_no', 
      },
      {
        Header: "Product Name",
        accessor: "product_name",
      },
      {
        Header: "HSN Code",
        accessor: "hsn_code",
      },
      {
        Header: "Micron",
        accessor: "micron",
      },
      {
        Header: "Width",
        accessor: "width",
      },
      {
        Header: "Meter",
        accessor: "meter",
      },
      // {
      //   Header: "Size (CM)",
      //   accessor: "size_in_cm",
      // },
      // {
      //   Header: "Size (MM)",
      //   accessor: "size_in_mm",
      // },
      // {
      //   Header: "Thickness",
      //   accessor: "thickness",
      // },
      // {
      //   Header: "Grade",
      //   accessor: "grade",
      // },
      {
        Header: "Action",
        Cell: ({ row }) => (
          <div className="d-flex gap-2 justify-content-center">
            <i
              className="bx bx-edit-alt link-primary"
              style={{ fontSize: "18px", cursor: "pointer" }}
              onClick={() => {
                onEdit(row.original)
              }}
            ></i>
            <i
              className="bx bxs-trash link-danger"
              style={{ fontSize: "18px", cursor: "pointer" }}
              onClick={() => onDelete(row.original.id)}
            ></i>
          </div>
        ),
      },
    ],
    []
  )

  return (
    <div className="container-fluid">
      <TableContainer
        columns={columns}
        data={data}
        isGlobalFilter={false}
        isAddOptions={false}
        customPageSize={10}
        className="custom-header-css"
      />
    </div>
  )
}

ProductDataTable.propTypes = {
  data: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default ProductDataTable
