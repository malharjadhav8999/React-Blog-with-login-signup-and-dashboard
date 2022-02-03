import "./App.css";
import ProjectCard from "./components/Card";
import ProjectJson from "./projects.json";
import Login from "./components/Login";
//import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Login />

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
      {/* <Footer id="footer" /> */}
    </>
  );
}

export default App;
