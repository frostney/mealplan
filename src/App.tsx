import React from "react";
import styled from "@emotion/native";
import "./App.css";

import { Day } from "./components";

const Week = styled.View({
  flexDirection: "row",
});

const App = () => (
  <Week>
    <Day name="Monday" />
    <Day name="Tuesday" />
    <Day name="Wednesday" />
    <Day name="Thursday" />
    <Day name="Friday" />
  </Week>
);

export default App;
