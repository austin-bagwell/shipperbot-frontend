import Background from "../assets/background_1.jpg";

export default function BackgroundImage() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background}`,
        backgroundPosition: "center",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }}
    ></div>
  );
}
