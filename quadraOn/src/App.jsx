import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Footer className="footer"/>
    </div>
  );
}

export default App;
