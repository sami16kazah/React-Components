import classNames from "classnames";
export default function Panal({ children, className, ...rest }) {
  const finalClassName = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
}
