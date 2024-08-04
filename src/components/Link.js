import { useContext } from "react";
import NavigationContext from "../context/Navigation";
export default function Link({ to, children }) {
  const {navigate} = useContext(NavigationContext);
  const handelClick = (event) => {
    if(event.metaKey||event.ctrlKey){
        return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <a onClick={handelClick} href={to}>
      {children}
    </a>
  );
}
