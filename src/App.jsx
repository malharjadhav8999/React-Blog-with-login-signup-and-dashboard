import "./App.css";
import ProjectCard from "./components/Card";
import ProjectJson from "./projects.json";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // if (localStorage.getItem("token"))
  // {
  //   setIsLogin(true)
  // }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    }
  }, []);

  if (isLogin) {
    return (
      <div>
        <Dashboard setIsLogin={setIsLogin} />
        <SignUp />
      </div>
    );
  } else {
    return (
      <>
        <div className="App">
          <Login setIsLogin={setIsLogin} />

          {/* <h2>Hello World</h2>
        {ProjectJson.map((item, index) => {
          return (
            <ProjectCard
              url={item.image_url}
              title={item.name}
              desc={item.description}
            />
          );
        })}
        <ProjectCard /> */}
        </div>
        <Footer id="footer" />
      </>
    );
  }
}
export default App;
