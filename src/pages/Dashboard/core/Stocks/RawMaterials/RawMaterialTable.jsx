import React, { useMemo } from "react"
import PropTypes from "prop-types"

import TableContainer from "components/Common/TableContainer"

function RawMaterialTable({ data, handleDeleteCompany }) {
  const columns = useMemo(
    () => [
      {
        Header: "Sr. No",
        accessor: (_, rowIndex) => rowIndex + 1,
        id: "sr_no",
      },
      {
        Header: "Company Name",
        accessor: "company_name",
      },
      {
        Header: "Total Pallet",
        accessor: "total_pallet",
      },
      {
        Header: "Bag per Pallet",
        accessor: "bag_per_pallet",
      },
      {
        Header: "Total Bag",
        accessor: "total_bag",
      },
      {
        Header: "Weight per Bag",
        accessor: "weight_per_bag",
      },
      {
        Header: "Total Weight",
        accessor: "total_weight",
      },
      {
        Header: "Action",
        Cell: ({ row }) => (
          <div className="d-flex gap-2 justify-content-center">
            {/* <i
              className="bx bx-edit-alt link-primary"
              style={{ fontSize: "18px", cursor: "pointer" }}
              //   onClick={() => {
              //     console.log("Edit icon clicked")
              //     onEdit(row.original)
              //   }}
            ></i> */}
            <i
              className="bx bxs-trash link-danger"
              style={{ fontSize: "18px", cursor: "pointer" }}
              onClick={() => handleDeleteCompany(row.original.id)}
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

RawMaterialTable.propTypes = {
  data: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  handleDeleteCompany: PropTypes.func.isRequired,
}

export default RawMaterialTable
