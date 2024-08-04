import { useState } from "react";
import Table from "./Table";
import { GoArrowDown } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";
export default function SortableTable(props) {
  const { config, data } = props;
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const getIcons = (label) => {
    if(label !== sortBy) return <div>-</div>
    if (sortOrder === "asc" && label) return <GoArrowDown></GoArrowDown>;
    else if (sortOrder === "dsc"  && label) return <GoArrowUp></GoArrowUp>;
    return <div className="">-</div>;
  };
  const handelCLick = (label) => {
    if (sortOrder == null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("dsc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  const updatedConfig = config.map((col) => {
    if (!col.sortValue) {
      return col;
    }
    return {
      ...col,
      header: () => (
        <th key={col.label} onClick={() => handelCLick(col.label)}>
          {getIcons(col.label)}
          {col.label} 
        </th>
      ),
    };
  });
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((col) => col.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reversedOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reversedOrder;
      } else {
        return (valueA - valueB) * reversedOrder;
      }
    });
  }
  return <Table {...props} data={sortedData} config={updatedConfig}></Table>;
}
