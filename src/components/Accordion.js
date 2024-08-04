import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl transition-transform duration-300">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id} className="border-b">
        <div
          className="flex justify-between items-center p-3 bg-gray-50 cursor-pointer"
          onClick={() => handleToggle(index)}
        >
          <span>{item.label}</span>
          {icon}
        </div>
        <div
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            isExpanded ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="p-5">{item.content}</div>
        </div>
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}