import Link from "./Link";
export default function SideBar (){
  const links = [
    {
      label: "buttons",
      path: "/",
    },
    { label: "dropdown", path: "/dropdown" },
    { label: "accordion", path: "/accordion" },
    { label: "modal", path: "/modal" },
    { label: "table", path: "/table" },
  ];
  const renderedLinks = links.map((link)=>{
    return <Link key={link.label} to={link.path}>{link.label}</Link>
  })
  return <div className=" sticky top-0 overflow-y-scroll flex flex-col">{renderedLinks}</div>;
};
