import { useState, useEffect } from "react";
import "./Home.css";
import Hero from "../components/Hero";
import Card from "../components/Cards";
import ImageMasonry from "../components/Masonry";

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
      <Hero />
      <h2 style={{ textAlign: "center", paddingTop: 15 }}>Drinks</h2>
      <div
        style={{
          display: "flex",
          gap: 30,
          justifyContent: "center",
          marginTop: 5,
          marginBottom: 10,
        }}
      >
        <Card />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 5,
          marginBottom: 10,
        }}
      >
        <ImageMasonry />
      </div>
    </>
  );
}

export default Home;
