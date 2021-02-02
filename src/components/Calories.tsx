import styled from "@emotion/native";

const CaloriesWrapper = styled.Text({
  color: "#444",
  fontSize: 12,
  alignSelf: "flex-end",
});

type Props = {
  value: number;
};

const Calories = ({ value }: Props) => (
  <CaloriesWrapper>{value} kcal</CaloriesWrapper>
);

export default Calories;
