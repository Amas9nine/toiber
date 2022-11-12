import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import { PrivateRoute, PublicRoute } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PublicRoute Component={HomePage} />} />
        <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
      </Routes>
    </div>
  );
}

export default App;
