import { Route , Routes} from "react-router-dom";
import './App.css';
import Home from  "./pages/Home/Home";
import Team from "./pages/Team/Team";
function App() {
  return (
   <Routes>
     <Route path="/Blog" element ={<Home />} />
     <Route path="/team" element ={<Team />} />
   </Routes>
  
  );
}
export default App;
