import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@components/home/Home";
import NavPanelLayout from "@components/dapp/NavPanelLayout";
import Dashboard from "@components/dapp/pages/Dashboard";
import Marketplace from "./components/dapp/pages/Marketplace";
import CardDetails from "./components/dapp/pages/CardDetails";
import Rent from "./components/dapp/pages/Rent";
import Stake from "./components/dapp/pages/Stake";
import Mint from "./components/dapp/pages/Mint";
import PinAI from "./components/dapp/pages/PintAI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route element={<NavPanelLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/:cardId" element={<CardDetails/>}/>
          <Route path="/rent" element={<Rent />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/pinAi" element={<PinAI />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
