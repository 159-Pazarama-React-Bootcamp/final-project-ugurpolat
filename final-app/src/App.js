import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages

import BasvuruOlustur from "./pages/BasvuruOlustur";
import BasvuruBasarili from "./pages/BasvuruBasarili";
import BasvuruSorgula from "./pages/BasvuruSorgula";
import Basvuru from "./pages/Basvuru";
import Admin from "./pages/Admin";
import AdminBasvuru from "./pages/AdminBasvuru";
import AdminBasvuruList from "./pages/AdminBasvuruList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Ticket App</h1>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<BasvuruOlustur></BasvuruOlustur>}
          ></Route>
          <Route
            path="/basvuru-basarılı"
            element={<BasvuruBasarili></BasvuruBasarili>}
          ></Route>
          <Route
            path="/basvuru-sorgula"
            element={<BasvuruSorgula></BasvuruSorgula>}
          ></Route>
          <Route path="/basvuru/:id" element={<Basvuru></Basvuru>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route
            path="/admin/basvuru-listesi"
            element={<AdminBasvuruList></AdminBasvuruList>}
          ></Route>
          <Route
            path="/admin/basvuru/:id"
            element={<AdminBasvuru></AdminBasvuru>}
          ></Route>
        </Routes>
        <Navbar></Navbar>
      </Router>
    </div>
  );
}

export default App;
