import Container from "react-bootstrap/Container";
import BGimage from "../assets/img1.jpg";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${BGimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width:'100%',
        position: "relative",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      ></div>

      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          height: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="text-center text-white"
          style={{ maxWidth: "700px" }}
        >
          <h1
            className="display-2 fw-bold mb-4"
            style={{ letterSpacing: "2px" }}
          >
            Refresh Your Day
          </h1>

          <p className="lead mb-4">
            Discover delicious cold drinks crafted with premium ingredients.
            Experience the perfect taste for every moment.
          </p>
        </div>
      </Container>
    </section>
  );
}