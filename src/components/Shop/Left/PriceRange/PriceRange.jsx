import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
const PriceRange = ({PriceRangeFn = ()=>{} , getPriceRange= ()=> {}}) => {
  const [value, setValue] = useState([30, 60]);

  const priceRanges = [
    { label: "All Price", value: "all" },
    { label: "Under $20", value: "under_20" },
    { label: "$25 to $100", value: "25_100" },
    { label: "$100 to $300", value: "100_300" },
    { label: "$300 to $500", value: "300_500" },
    { label: "$500 to $1,000", value: "500_1000" },
    { label: "$1,000 to $10,000", value: "1000_10000" },
  ];

  // Debounce effect (3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      PriceRangeFn(value)
    }, 500);
    return () => clearTimeout(timer); 
  }, [value]);


  return (
    <div className="flex flex-col gap-y-6">
      <h2>Price Range</h2>
      <RangeSlider id="range-slider-yellow" onInput={(value)=> setValue(value)} />
      {/* button */}
      <div className="flex justify-between items-center ">
        <button className="border border-gray_100 grow mr-2 py-2 cursor-pointer">
          Min price
        </button>
        <button className="border border-gray_100 grow ml-2 py-2 cursor-pointer">
          max price
        </button>
      </div>
      {/* price list */}
      <div>
        <div className="flex flex-col gap-y-3">
          {priceRanges?.map((price) => (
            <div className="flex items-center gap-x-2" onClick={()=>getPriceRange(price.value.split('_'))}>
              <input
                type="radio"
                value={price.value}
                id={price.label}
                name="priceRange"
              />
              <label
                className="body_sm_400 text-gray_600 cursor-pointer"
                htmlFor={price.label}
                name="priceRange"
              >
                {price.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
