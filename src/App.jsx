import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@components/home/Home";
import NavPanelLayout from "@components/dapp/NavPanelLayout";
import Dashboard from "@components/dapp/Dashboard";
import Marketplace from "./components/dapp/Marketplace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dapp" element={<NavPanelLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="marketplace" element={<Marketplace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
