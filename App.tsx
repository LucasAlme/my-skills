import React from "react";
import { StatusBar } from "react-native";
import Home from "./src/pages/home";
import { cores } from "./src/utils/Constants";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={cores.preto} />
      <Home />
    </>
  )
}