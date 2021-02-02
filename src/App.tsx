import React from "react";
import styled from "@emotion/native";
import { RecoilRoot } from "recoil";

import "./App.css";

import { Day } from "./components";

const Week = styled.View({
  flexDirection: "row",
});

const App = () => (
  <RecoilRoot>
    <Week>
      <Day name="Monday" />
      <Day name="Tuesday" />
      <Day name="Wednesday" />
      <Day name="Thursday" />
      <Day name="Friday" />
    </Week>
  </RecoilRoot>
);

export default App;
