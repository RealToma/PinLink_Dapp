import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@components/home/Home";
import NavPanelLayout from "@components/dapp/NavPanelLayout";
import Dashboard from "@components/dapp/Dashboard";
import Marketplace from "./components/dapp/Marketplace";
import Rent from "./components/dapp/Rent";
import Stake from "./components/dapp/Stake";
import Mint from "./components/dapp/Mint";
import PinAI from "./components/dapp/PintAI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NavPanelLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/pinAi" element={<PinAI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
