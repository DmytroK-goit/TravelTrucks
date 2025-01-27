import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getCampers } from "./redux/campers/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampers());
  });
  return <div></div>;
}

export default App;
