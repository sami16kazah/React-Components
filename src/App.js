import Route from "./components/Route";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import SideBar from "./components/SideBar";
import ModalPage from "./pages/ModalPage";
import TabelPage from "./pages/TablePage";
function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4 ">
      <SideBar></SideBar>
      <div className="col-span-5">
      <Route path="/">
        <ButtonPage></ButtonPage>
      </Route>
      <Route path="/modal">
        <ModalPage></ModalPage>
      </Route>
      <Route path="/table">
        <TabelPage></TabelPage>
      </Route>
      <Route path="/accordion">
        <AccordionPage></AccordionPage>
      </Route>
      <Route path="/dropdown">
        <DropDownPage></DropDownPage>
      </Route>
      </div>
    </div>
  );
}

export default App;
