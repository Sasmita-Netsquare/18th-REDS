import { useState } from "react";
import { BuyerForm, SupplierForm } from "../components";

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState<"supplier" | "buyer">("supplier");

  return (
    <div className="main-container text-white px-4 py-10 font-sans mt-30" id="hero">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8 sticky top-0 z-50 backdrop-blur py-4">
        <button
          onClick={() => setActiveTab("supplier")}
          className={`px-6 py-2 font-semibold rounded transition cursor-pointer ${
            activeTab === "supplier"
              ? "bg-yellow-500 text-black"
              : "bg-gray-100 text-black"
          }`}
        >
          Supplier
        </button>
        <button
          onClick={() => setActiveTab("buyer")}
          className={`px-6 py-2 font-semibold rounded transition cursor-pointer ${
            activeTab === "buyer"
              ? "bg-yellow-500 text-black"
              : "bg-gray-100 text-black"
          }`}
        >
          Buyer
        </button>
      </div>

      {/* Form Component */}
      {activeTab === "supplier" ? <SupplierForm /> : <BuyerForm />}
    </div>
  );
}
