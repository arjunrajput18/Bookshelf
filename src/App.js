import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Component/Header";
import { Home } from "./Pages/Home";
import { Search } from "./Pages/Search";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
