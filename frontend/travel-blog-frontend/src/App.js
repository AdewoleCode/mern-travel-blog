import Header from "./Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diaries from "./Diaries/Diaries";
import Account from "./Account/Account";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <section>
        <BrowserRouter>
          <header>
            <Header />
          </header>

          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/diaries" element={<Diaries />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
