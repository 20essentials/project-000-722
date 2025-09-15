import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";

const bodyStyles = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  fontFamily: "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
  scrollBehavior: "smooth",
  position: "relative"
};

const h1Styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "7vmax",
  letterSpacing: "2px",
  WebkitTextFillColor: "#fff",
  WebkitTextStrokeWidth: "2px",
  cursor: "pointer",
  positionStyle: "relative"
};

const App = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      h1::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        color: #ff0;
        letter-spacing: 2px;
        -webkit-text-fill-color: #000;
        -webkit-text-stroke-width: 2px;
        height: 0%;
        overflow: hidden;
        transition: 0.5s;
      }
    `, styleSheet.cssRules.length);
    styleSheet.insertRule(`
      h1::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        color: #000;
        letter-spacing: 2px;
        -webkit-text-fill-color: #ff0;
        -webkit-text-stroke-width: 2px;
        width: 0%;
        overflow: hidden;
        transition: 0.3s;
        transition-delay: 0.5s;
      }
    `, styleSheet.cssRules.length);

    const h1 = ref.current;
    h1.addEventListener("mouseenter", () => {
      h1.style.setProperty("--hover", "true");
      h1.querySelector("::before");
    });
  }, []);

  return <h1 ref={ref} data-text="AWESOME" style={h1Styles}>AWESOME</h1>;
};

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);

export default App;
