import Side from "./Component/Side.jsx";
import './App.css';
import Route from "./Webroute/Routes.jsx";

function App() {
  return (
    <div  className="relative">
      <div className="sticky z-20 top-20 ml-5 w-20">
        <Side  />
        </div>
      <div className="relative top-[-504px] w-full z-10">
        <Route />
      </div>
    </div>
  );
}

export default App;
