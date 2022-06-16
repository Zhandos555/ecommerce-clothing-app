import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <div>I am the Shop page</div>;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
