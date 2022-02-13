import "./App.css";
import ProjectCard from "./components/Card";
import ProjectJson from "./projects.json";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import { Link, Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import Homepage from "./components/HomePage";
import Blogs from "./components/Blogs";
import Posts from "./components/posts/posts";
import HomePage from "./components/HomePage";

function App() {
  // const [isLogin, setIsLogin] = useState(false);

  // if (localStorage.getItem("token"))
  // {
  //   setIsLogin(true)
  // }

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setIsLogin(true);
  //   }
  // }, []);
  return (
    <>
      <div
        style={{
          padding: "40px",
          
        }}
        className="container"
      >
        {/* <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        > */}
        {/* <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link> */}
        {/* </nav> */}

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard title="Users" />} />
          <Route path="/dashboard/:userId" element={<UserDetails />} />

          <Route
            path="/dashboard/regular"
            element={<Dashboard title="Regular Users" />}
          />
          <Route
            path="/dashboard/premium"
            element={<Dashboard title="Premium Users" />}
          />

          <Route path="/dashboard/blogs" element={<Posts />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/post/:userId" element={<Blogs />} />
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
        <Footer id="footer" />
      </div>
    </>
  );

  // if (isLogin) {
  //   return (
  //     <div>
  //       <Dashboard setIsLogin={se9tIsLogin} />
  //       <SignUp />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <>
  //       <div className="App">
  //         <Login setIsLogin={setIsLogin} />

  //         {/* <h2>Hello World</h2>
  //       {ProjectJson.map((item, index) => {
  //         return (
  //           <ProjectCard
  //             url={item.image_url}
  //             title={item.name}
  //             desc={item.description}
  //           />
  //         );
  //       })}
  //       <ProjectCard /> */}
  //       </div>
  //     </>
  //   );
  // }
}
export default App;
