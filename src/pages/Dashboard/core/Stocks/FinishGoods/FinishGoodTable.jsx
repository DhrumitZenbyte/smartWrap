import React, { useMemo } from "react"
import PropTypes from "prop-types"

import TableContainer from "components/Common/TableContainer"

function FinishGoodTable({ data, handleDeleteCompany }) {
  const columns = useMemo(
    () => [
      {
        Header: "Sr. No",
        accessor: (_, rowIndex) => rowIndex + 1,
        id: "sr_no",
      },
      {
        Header: "Product",
        // accessor: "product.product_name",
        Cell: ({ row }) => {
          const product = row.original.product
          return product ? <div>{product.product_name}</div> : <div>N/A</div>
        },
      },
      // {
      //   Header: "Size",
      //   Cell: ({ row }) => {
      //     const size = row.original.size
      //     return size ? (
      //       <div>
      //         {size.size_in_cm} x {size.size_in_mm}
      //       </div>
      //     ) : (
      //       <div>N/A</div>
      //     )
      //   },
      // },
      {
        Header: "Size",
        accessor: "size"
      },
      {
        Header: "Kg per Roll",
        accessor: "kg_per_roll",
      },
      {
        Header: "Roll Quantity",
        accessor: "roll_quantity",
      },
      {
        Header: "Total Kg",
        accessor: "total_kg",
      },
      {
        Header: "Number of Pallet",
        accessor: "number_of_pallet",
      },
      {
        Header: "Pallet Number",
        accessor: "pallet_number",
      },
      {
        Header: "Details",
        accessor: "details",
      },
      {
        Header: "Boxes",
        accessor: "boxes",
      },
      {
        Header: " Material / Grade / Description of Goods",
        accessor: "good_details",
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

FinishGoodTable.propTypes = {
  data: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  handleDeleteCompany: PropTypes.func.isRequired,
}

export default FinishGoodTable
