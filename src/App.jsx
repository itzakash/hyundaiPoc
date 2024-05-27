import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouting from "./routes/AppRouting";

function App() {
  return (
    <>
      <BrowserRouter basename="/hyundai">
        <AppRouting />
      </BrowserRouter>
    </>
  );
}

export default App;
