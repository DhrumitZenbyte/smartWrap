import React, { useState } from "react"

const FinishGoodsModal = ({ isOpen, onClose, onAddProduct }) => {
  const [product, setProduct] = useState("")
  const [hsnCode, setHsnCode] = useState("")
  const [size, setSize] = useState("")
  const [sqmPerRoll, setSqmPerRoll] = useState("")
  const [rollQuantity, setRollQuantity] = useState("")
  const [totalSqm, setTotalSqm] = useState("")
  const [pallet, setPallet] = useState("")
  const [palletName, setPalletName] = useState("")
  const [details, setDetails] = useState("")
  const [boxes, setBoxes] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const newProduct = {
      product,
      hsnCode,
      size,
      sqmPerRoll,
      rollQuantity,
      totalSqm,
      pallet,
      palletName,
      details,
      boxes,
    }
    onAddProduct(newProduct)
    onClose()
  }

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl mx-4">
          <h2 className="text-xl mb-4">Add Finish Good</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700">Product</label>
                <input
                  type="text"
                  value={product}
                  onChange={e => setProduct(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">HSN Code</label>
                <input
                  type="text"
                  value={hsnCode}
                  onChange={e => setHsnCode(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Size</label>
                <input
                  type="text"
                  value={size}
                  onChange={e => setSize(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Sqm per Roll</label>
                <input
                  type="text"
                  value={sqmPerRoll}
                  onChange={e => setSqmPerRoll(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Roll Quantity</label>
                <input
                  type="text"
                  value={rollQuantity}
                  onChange={e => setRollQuantity(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Total Sqm</label>
                <input
                  type="text"
                  value={totalSqm}
                  onChange={e => setTotalSqm(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Pallet</label>
                <input
                  type="text"
                  value={pallet}
                  onChange={e => setPallet(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Pallet Name</label>
                <input
                  type="text"
                  value={palletName}
                  onChange={e => setPalletName(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Details</label>
                <input
                  type="text"
                  value={details}
                  onChange={e => setDetails(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Boxes</label>
                <input
                  type="text"
                  value={boxes}
                  onChange={e => setBoxes(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default FinishGoodsModal
