import SearchBar from "./SearchBar"
import ButtonBar from "./ButtonBar";
import TaskBar from "./TaskBar";
import NavBar from "./NavBar";

function App() {
  return (

      <div className="all_content">

        <div className="container">
          <SearchBar />
        </div>

        <div className="container">
          <ButtonBar />
        </div>

        <div className="container">
          <TaskBar />
        </div>

        <div className="container">
          <NavBar />
        </div>

      </div>

  );
}

export default App;
