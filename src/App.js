import "./App.css";
import Display from "./components/Display";
import Generate from "./components/Generate";
function App() {

  return (
    <>
      <div className="app-top">
        <h1>Skills Used: Redux-toolkit and CSS</h1>
        <h5>
          Here I am using redux-toolkit ( managing state ) and chance package(
          generate random names ) 
        </h5>
        <div className="app-parent">
          <div className="app-child">
            <Generate />
            <Display />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
