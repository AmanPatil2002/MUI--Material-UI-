import { useState, useEffect } from "react";
import "./Home.css";
import Admin from "../pages/admin/Dashboard"


function Home() {
 
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div>
        <div className="loader">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>

        <div className="longfazers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <>

        <Admin/>
        
    </>
  );
}

export default Home;