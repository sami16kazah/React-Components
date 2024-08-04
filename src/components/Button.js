
import classNames from "classnames";
import { twMerge } from 'tailwind-merge';
export default function Button({
  children,
  plain,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
  ...rest
}) {
    let classes = twMerge(classNames( rest.className, "flex px-3 py-1.5 border" , {
        'border-blue-500 bg-blue-500 text-white' : primary ,
        'border-gray-500 bg-gray-500 text-white' : secondary ,
        'border-red-500 bg-red-500 text-white' : danger ,
        'border-yellow-500 bg-yellow-500 text-white' : warning ,
        'border-green-500 bg-green-500 text-white' : success ,
        'border-black-500 bg-white-500 text-black' : plain ,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger
         
    }));

  return (
    <button {...rest} className = {classes} >
      {children}
    </button>
  );
}
 