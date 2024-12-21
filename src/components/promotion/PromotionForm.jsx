import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PromotionForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    promotion_type: "",
    promotion_name: "",
    product: "",
    star_date: "",
    end_date: "",
    promotion_usage_limit: 0,
    discount: 0,
  });

  const getFormType = () => {
    if (location.pathname.includes("promotion/add")) return "add";
    if (location.pathname.includes("promotion/edit")) return "edit";
    if (location.pathname.includes("promotion/detail")) return "detail";
    return "add";
  };

  const formType = getFormType();

  const getFormConfig = () => {
    switch (formType) {
      case "edit":
        return {
          title: "Edit Promotion",
          buttonText: "Save",
          isReadOnly: false,
        };
      case "detail":
        return {
          title: "Promotion Detail",
          buttonText: "Close",
          isReadOnly: true,
        };
      default:
        return {
          title: "Add Promotion",
          buttonText: "Add Promotion",
          isReadOnly: false,
        };
    }
  };

  const { title, buttonText, isReadOnly } = getFormConfig();

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (formType) {
      case "add":
        console.log("Adding new Promotion:", formData);
        break;
      case "edit":
        console.log("Updating Promotion:", formData);
        break;
      default:
        break;
    }
  };

  const handleCancel = () => {
    navigate("/promotion");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <button
              onClick={() => navigate("/promotion")}
              className="text-xl mr-2"
            >
              ←
            </button>
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
          <div className="flex items-center text-sm">
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/home")}
            >
              Home
            </span>
            <span className="text-red-500 mx-2">{">"}</span>
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/promotion")}
            >
              Promotion
            </span>
            <span className="text-red-500 mx-2">{">"}</span>
            <span className="text-red-500">{title}</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-6 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-base mb-2">Promotion Type</label>
                <select
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none"
                  value={formData.promotion_type}
                  onChange={(e) =>
                    setFormData({ ...formData, promotion_type: e.target.value })
                  }
                  disabled={isReadOnly}
                >
                  <option value="" disabled>
                    Select Promotion Type
                  </option>
                  <option value="discount">Direct Discount</option>
                  <option value="voucher">Voucher Code</option>
                </select>
                {!isReadOnly && (
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-base mb-2">Product</label>
                <div className="relative">
                  <select
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none"
                    value={formData.product}
                    onChange={(e) =>
                      setFormData({ ...formData, product: e.target.value })
                    }
                    disabled={isReadOnly}
                  >
                    <option value="" disabled>
                      Select Product
                    </option>
                    <option value="laptop-pavilion">
                      Laptop Pavilion - Warna Hitam
                    </option>
                  </select>
                  {!isReadOnly && (
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-base mb-2">End Date</label>
                <input
                  type="date"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none"
                  value={formData.end_date}
                  onChange={(e) =>
                    setFormData({ ...formData, end_date: e.target.value })
                  }
                  readOnly={isReadOnly}
                />
              </div>
              <div>
                <label className="block text-base mb-2">
                  Promotion Usage Limit
                </label>
                <input
                  type="number"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none"
                  value={formData.promotion_usage_limit}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      promotion_usage_limit: e.target.value,
                    })
                  }
                  readOnly={isReadOnly}
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-base mb-2">Promotion Name</label>
                <input
                  type="number"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none"
                  value={formData.promotion_name}
                  onChange={(e) =>
                    setFormData({ ...formData, promotion_name: e.target.value })
                  }
                  readOnly
                />
              </div>
              <div>
                <label className="block text-base mb-2">Start Date</label>
                <input
                  type="date"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none"
                  value={formData.star_date}
                  onChange={(e) =>
                    setFormData({ ...formData, star_date: e.target.value })
                  }
                  readOnly={isReadOnly}
                />
              </div>
              <div>
                <label className="block text-base mb-2">Discount</label>
                <div className="relative">
                  <select
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none"
                    value={formData.product}
                    onChange={(e) =>
                      setFormData({ ...formData, product: e.target.value })
                    }
                    disabled={isReadOnly}
                  >
                    <option value="" disabled>
                      Select Discount
                    </option>
                    <option value={50000}>
                      Amount : 50.000
                    </option>
                    <option value={20000}>
                      Amount : 20.000
                    </option>
                    <option value={10000}>
                      Amount : 10.000
                    </option>
                  </select>
                  {!isReadOnly && (
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            {formType !== "detail" && (
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50"
              >
                Cancel
              </button>
            )}
            <button
              type={formType === "detail" ? "button" : "submit"}
              onClick={formType === "detail" ? handleCancel : undefined}
              className={`px-6 py-2 rounded text-white ${
                formType === "detail"
                  ? "bg-gray-500 hover:bg-gray-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromotionForm;