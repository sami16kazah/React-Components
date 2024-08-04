
import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [{
    id:"1",
    label: "Can i Use React js",
    content: "Yes you can ! "
  },
  {
    id:"2",
    label: "Can i Use React native",
    content: "No you can't ! "
  },
  {
    id:"3",
    label: "Can i Use Next js",
    content: "Yes you can ! "
  }]
  return <div>
    <Accordion items={items}></Accordion>
  </div>;
}

export default AccordionPage;
