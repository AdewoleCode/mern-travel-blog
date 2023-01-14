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
import DiaryUpdate from "./Diaries/DiaryUpdate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DiaryItem from "./Diaries/DiaryItem";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [localStorage]);

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
            <Route path="/item" element={<DiaryItem />} />

            {isloggedIn && (
              <>
                <Route path="/add" element={<AddDiary />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/post/:id" element={<DiaryUpdate />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
