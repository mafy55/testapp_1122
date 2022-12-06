import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Weather() {
  function handleChange() {
    console.log("テキスト");
  }
  return (
    <>
      <h1>Weather</h1>
      <p>今日の天気は</p>
      <select onChange={handleChange}>
        <option value="tokyo">東京</option>
        <option value="osaka">大阪</option>
        <option value="sapporo">札幌</option>
      </select>
    </>
  );
}
function Dashboard() {
  return <h1>Dashboard</h1>;
}
function NotMatch() {
  return <h1>NotMatch</h1>;
}

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="weather" element={<Weather />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
