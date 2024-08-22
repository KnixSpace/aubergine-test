import { useState } from "react";
import { RegionDropdown } from "react-country-region-selector";

const Search = () => {
  const [region, setRegion] = useState("");
  const [counrty, setCountry] = useState("");
  return (
    <section className="max-w-[900px] w-full flex gap-8 justify-between transition-all duration-500 ease-in-out">
      <input
        className="w-full rounded-md text-lg focus:outline-none px-4 py-2 text-[#f56464] bg-[#151517]"
        type="text"
        placeholder="Search your desired country"
      />
      <RegionDropdown
        className="bg-mainBg py-2 px-3 rounded-md text-sm focus:outline-none object-contain text-[#f56464] bg-[#151517]"
        blankOptionLabel="Please Enter Country"
        defaultOptionLabel="Now select state"
        country={counrty}
        value={region}
        onChange={(val) => setRegion(val)}
      ></RegionDropdown>
    </section>
  );
};
export default Search;
