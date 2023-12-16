import './App.css';
import AboutMe from './Component/AboutMe';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Main from './Component/Main';
import MySkills from './Component/MySkills';
import Project from './Component/Project';

function App() {
  return (
    <>
      {/* <div className="App"></div> */}
        <Header />
        <Main />
        <AboutMe/>
        <MySkills />
        <Project/>
        <Contact/>
        <Footer />
    </>

  );
}

export default App;
