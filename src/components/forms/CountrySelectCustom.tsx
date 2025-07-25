import { useField } from "formik";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { countryOptions } from "../../utils";

interface Props {
  name: string;
}

export default function CountrySelectCustom({ name }: Props){
  const [field, meta, helpers] = useField(name);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = countryOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (value: string) => {
    helpers.setValue(value);
    setShowDropdown(false);
    setSearchTerm("");
  };

  const selectedLabel =
    countryOptions.find((opt) => opt.value === field.value)?.label || "Select Country";

  return (
    <div className="relative w-full">
      <label htmlFor="country" className="font-bold block mb-1">
        Select Country <span className="text-red-500">*</span>
      </label>
      <div
        className="bg-white text-black border border-gray-300 rounded px-4 py-2 cursor-pointer flex justify-between items-center"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <p>
          {selectedLabel}
        </p>
        <p><FiChevronDown /></p>
      </div>

      {showDropdown && (
        <div className="absolute bg-white text-black z-50 w-full border border-gray-300 rounded shadow-md mt-1 max-h-60 overflow-y-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 px-4 border-b border-gray-300 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="max-h-48 overflow-y-auto">
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm mt-1 absolute -bottom-5">{meta.error}</p>
      )}
    </div>
  );
};
