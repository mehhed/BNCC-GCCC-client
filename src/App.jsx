import Nav from "./nabbar/Nav";
import Fotter from "./footer/Fotter";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Nav></Nav>
      <div className="flex-1  w-full">
        <Outlet></Outlet>
      </div>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
