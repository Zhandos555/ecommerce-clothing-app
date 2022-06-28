import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Autentication from "./routes/autentication/autentication.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Autentication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
