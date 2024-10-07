import "./App.css";
import VideoWithPopup from "./components/VideoWithPopup";
import { GridItem, Switch } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ShowVideo from "./components/ShowVideo";

function App() {
  return (
    <>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <div>
        <VideoWithPopup></VideoWithPopup>
      </div>
    </>
  );
}

export default App;
