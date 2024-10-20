import { useState } from "react";
import Header from "../../../../shared/Header/Header";
import TenancySubtitleBar from "./TenancySubtitleBar/TenancySubtitleBar";
import TenancyTable from "./TenancyTable/TenancyTable";
import TenancyFilter from "./TenancyFilter/TenancyFilter";

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
      <Header />
      <TenancySubtitleBar title="Tenancy List" />

      <TenancyFilter
        options={sortOptions}
        selectedValue={sortOption}
        onChange={handleSortChange}
      />

      <TenancyTable />
    </>
  );
};

export default TenancyLists;
