import Header from "./Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diaries from "./Diaries/Diaries";
import Login from "./Account/Login";
import Register from "./Account/Register";
import Home from "./Home/Home";
import AddDiary from "./Diaries/AddDiary";
import Profile from "./Account/Profile";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store/store";

function App() {
  const dispatch = useDispatch()

  useEffect(()=> {
    if (localStorage.getItem('userId')){
      dispatch(authActions.login())
    }
  }, [])

  // useEffect(()=> {
  //   if (isloggedIn){

  //   }
  // }, [])

  
  const isloggedIn = useSelector((state) => state.isloggedIn);
  console.log(isloggedIn);

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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<AddDiary />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
