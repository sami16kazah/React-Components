import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panal from "./Panal";

export default function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handelClick = (currentIsOpen) => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };
  const handelOptionClick = (option) => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
    onChange(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handelOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });
  return (
    <div ref={divEl} className="w-48 relative">
      <Panal
        className="flex justify-between items-center cursor-pointe"
        onClick={handelClick}
      >
        {value?.value || "Select..."}
        <GoChevronDown className="text-lga"></GoChevronDown>
      </Panal>
      {isOpen && (
        <Panal className="absolut top-full border ">{renderedOptions}</Panal>
      )}
    </div>
  );
}
