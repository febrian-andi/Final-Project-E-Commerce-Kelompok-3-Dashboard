import React from "react";
import StatusOrder from "./StatusOrder";

const DetailOrdersModal = ({ isOpen, onClose, order }) => {
  if (!isOpen) return null;
  const {
    customer_name = "John Doe",
    address = "Jl. Raya Bogor No.1, Bandung, Jawa Barat",
    payment_method = "Gopay",
    status_order = "created",
    products = [
      {
        name: "T-Shirt",
        amount: 1,
        price: 100,
        total_price: 1 * 100,
      },
      {
        name: "Pants",
        amount: 1,
        price: 80,
        total_price: 1 * 80,
      },
      {
        name: "Shoes",
        amount: 1,
        price: 200,
        total_price: 1 * 200,
      },
    ],
    sub_total = [100, 80, 200].reduce((acc, curr) => acc + curr, 0),
  } = order || {};

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full sm:w-max p-4">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold text-gray-800">Detail Order</h2>
          <div>
            <StatusOrder status_order={status_order} />
          </div>
        </div>
        <div className="px-4 pr-6 pt-4">
          <div className="mb-4 space-y-2">
            <div className="grid grid-cols-3">
              <p className="text-xs">Customer Name</p>
              <p className="text-xs font-medium col-span-2">{customer_name}</p>
            </div>
            <div className="grid grid-cols-3">
              <p className="text-xs">Address</p>
              <p className="text-xs font-medium col-span-2">{address}</p>
            </div>
            <div className="grid grid-cols-3">
              <p className="text-xs">Payment Method</p>
              <p className="text-xs font-medium col-span-2">{payment_method}</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left text-xs font-bold pr-6 py-4">
                    Product Name
                  </th>
                  <th className="text-left text-xs font-bold pr-6 py-4">
                    Amount
                  </th>
                  <th className="text-left text-xs font-bold pr-6 py-4">
                    Unit Price
                  </th>
                  <th className="text-left text-xs font-bold pr-6 py-4">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product, index) => (
                  <tr key={index} className="table-row border-b">
                    <td className="text-left text-xs pr-6 py-4">
                      {product.name}
                    </td>
                    <td className="text-left text-xs pr-6 py-4">
                      {product.amount}
                    </td>
                    <td className="text-left text-xs pr-6 py-4">
                      ${product.price}
                    </td>
                    <td className="text-left text-xs pr-6 py-4">
                      ${product.total_price}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="text-left text-xs pr-6 py-4"></td>
                  <td className="text-left text-xs pr-6 py-4"></td>
                  <td className="text-left text-xs pr-6 py-4"></td>
                  <td className="text-left text-xs pr-6 py-4 font-medium">
                    Sub Total
                  </td>
                  <td className="text-left text-xs pr-6 py-4 font-semibold">
                    ${sub_total}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <form>
          {status_order === "process" && (
            <div className="space-y-1">
              <label className="text-sm" htmlFor="tracking_number">
                Tracking Number
              </label>
              <input 
                className="w-full border bg-[#F4F5F9] rounded py-1 px-4 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-transparent"
                type="text"
                id="tracking_number"
                name="tracking_number"
                placeholder="Enter Tracking Number"
                required
              />
            </div>
          )}

          {(status_order === "created" || status_order === "process") && (
            <div className="flex justify-end space-x-4 mt-10">
              <button
                className="border border-[#DB4444] text-[#DB4444] text-xs w-1/4 py-2 rounded hover:bg-[#D7D7D7FF] transition duration-200"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#DB4444] text-white text-xs w-1/4 py-2 rounded hover:bg-[#B33939FF] transition duration-200"
              >
                Accept
              </button>
            </div>
          )}

          {(status_order === "completed" || status_order === "cancelled") && (
            <div className="flex justify-end space-x-4 mt-10">
              <button
                className="bg-gray-500 text-white text-xs w-1/4 py-2 rounded hover:bg-gray-600 transition duration-200"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DetailOrdersModal;