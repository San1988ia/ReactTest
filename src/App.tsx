import "./App.scss";
import Dropdown from "./components/DropDown/DropDown";
import OrderedList from "./components/OrderedList/OrderedList";
import WorkerInfoBox from "./components/WorkerInfoBox/WorkerInfoBox";

import animalsArray from "./assets/json/animals.json";
import workersArray from "./assets/json/bob_simple_10.json";

import UnorderedListContainer from "./components/UnorderedListContainer/UnorderedListContainer";

function App() {
  return (
    <>
      <h1> Testar </h1>
      <p> 🙍‍♀️Demo för övning i React🙍‍♀️ </p>
      <Dropdown />
      <OrderedList animals={animalsArray} />
      <WorkerInfoBox oneWorker={workersArray[0]} />
      <UnorderedListContainer />
    </>
  );
}
export default App;
