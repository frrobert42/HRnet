import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployee from "./pages/create-employee/createEmployee";
import EmployeeList from "./pages/employee-list/employee-list";

/**
 * App component
 * @return {JSX.Element}
 * @constructor
 */
function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<CreateEmployee />} />
              <Route path="/employee-list" element={<EmployeeList />} />
          </Routes>
      </Router>
  );
}

export default App;
