import './App.css';
import Skills from "./conponents/Skills";
import {Route, Routes} from "react-router";
import ServicesDetails from "./conponents/ServicesDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Skills/> } />
        <Route path="/:id/details" element={ <ServicesDetails/> } />
        <Route path="*" element={ <div>404 Not Found</div> } />
      </Routes>

    </div>
  );
}

export default App;
