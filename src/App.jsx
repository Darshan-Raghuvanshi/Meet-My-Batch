 import {students} from"./data";
import Header from "./components/Header";
import StudentCard from"./components/StudentCard";
import StudentList from"./components/StudentList";
function App() {
  return (
    <>
    <Header header={header}/>
    <StudentCard studentCard={studentCard}/>
    <StudentList studentlist={studentlist}/>
    </>
  );
}

export default App;