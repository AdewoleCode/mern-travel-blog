import Header from "./component/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diaries from "./Diaries/Diaries";
import LoginPage from "./pages/Account/Login"
import RegisterPage from "./pages/Account/Register";
import HomePage from "./pages/Home/Home";
import AddDiary from "./Diaries/AddDiary";
import ProfilePage from "./pages/Account/Profile";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store/store";
import DiaryUpdate from "./Diaries/DiaryUpdate";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DiaryItem from "./component/DiaryItem";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [localStorage.getItem("userId")]);


  const isloggedIn = useSelector((state) => state.isloggedIn);

  return (
    <div className="App">
      <section>
        <BrowserRouter>
          <header>
            <Header />
          </header>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/diaries" element={<Diaries />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/item" element={<DiaryItem />} />

            {isloggedIn && (
              <>
                <Route path="/add" element={<AddDiary />} />
                <Route path="/profile" element={<ProfilePage />} />
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
