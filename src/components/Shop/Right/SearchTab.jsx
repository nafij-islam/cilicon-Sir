import { useState } from "react";

const SearchTab = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  //   handleClick
  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="grid grid-cols-[40%60%] items-center">
      {/* Search Form */}
      <form className="" onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="search"
          className="block mb-2.5 text-sm font-medium text-heading sr-only"
        >
          Search
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-body"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="search"
            id="search"
            className="block w-full p-3 ps-9 border border-gray_100 rounded  focus:outline-0"
            placeholder="Search"
            required
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            type="button"
            className="absolute end-1.5 bottom-1.5 text-white bg-black hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
          >
            Search
          </button>
        </div>
      </form>

      {/* Dropdown Button */}
      <div className="justify-self-end">
       <div className="flex items-center gap-x-3">
        <p>Sort by:</p>
        <select name="" id="" className="w-[150px] py-2 border border-gray_100 focus:outline-0 cursor-pointer">
            <option value="xyz">xyz</option>
            <option value="xyz">xyz</option>
            <option value="xyz">xyz</option>
            <option value="xyz">xyz</option>
        </select>
       </div>

        
      </div>
    </div>
  );
};

export default SearchTab;
