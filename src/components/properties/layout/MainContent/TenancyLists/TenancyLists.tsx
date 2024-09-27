import { useState } from "react";
import PropertyHeader from "../PropertyHeader/PropertyHeader";
import TenancySortFilter from "./TenancySortFilter/TenancySortFilter";
import TenancySubtitleBar from "./TenancySubtitleBar/TenancySubtitleBar";
import TenancyTable from "./TenancyTable/TenancyTable";

const TenancyLists = () => {
  const [sortOption, setSortOption] = useState("Default");

  const sortOptions = [
    { value: "Default", label: "Default" },
    { value: "Newest", label: "Newest" },
  ];

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  return (
    <>
      <PropertyHeader />
      <TenancySubtitleBar title="Tenancy List" />

      <TenancySortFilter
        options={sortOptions}
        selectedValue={sortOption}
        onChange={handleSortChange}
      />

      <TenancyTable />
    </>
  );
};

export default TenancyLists;
