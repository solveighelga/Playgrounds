import Navbar from "./scenes/Navbar";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  //const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  
  return (
    <div className="app bg-deep-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

    </div>
  );
}

export default App;
