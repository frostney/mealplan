import React from "react";
import { View } from "react-native";
import styled from "@emotion/native";

import Meal from "./Meal";
import Calories from "./Calories";

type Props = {
  name: string;
};

const DayWrapper = styled.View({
  flex: 1,
  paddingLeft: 12,
  paddingRight: 12,
});

const DayName = styled.Text({
  fontWeight: "bold",
});

const Day = ({ name }: Props) => (
  <DayWrapper>
    <View>
      <DayName>{name}</DayName>
      <Calories value={0} />
    </View>
    {["Breakfast", "Lunch", "Dinner"].map((name) => (
      <Meal name={name} />
    ))}
  </DayWrapper>
);

export default Day;
