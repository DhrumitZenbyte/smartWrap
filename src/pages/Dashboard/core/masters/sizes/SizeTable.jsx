import React, { useMemo } from "react"
import PropTypes from "prop-types"

import TableContainer from "components/Common/TableContainer"

function SizeTable({ data, onEdit, onDelete }) {
  const columns = useMemo(
    () => [
      {
        Header: "Size (CM)",
        accessor: "size_in_cm",
      },
      {
        Header: "Size (MM)",
        accessor: "size_in_mm",
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
        Header: "Thickness",
        accessor: "thickness",
      },
      {
        Header: "Micron",
        accessor: "micron",
      },
      {
        Header: "Grade",
        accessor: "grade",
      },
      {
        Header: "Width",
        accessor: "width",
      },
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

SizeTable.propTypes = {
  data: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default SizeTable
