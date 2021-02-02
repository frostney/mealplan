import { View, Text, Image } from "react-native";

import Calories from "./Calories";

type Props = {
  name: string;
};

const Meal = ({ name }: Props) => (
  <View>
    <Text>{name}</Text>
    <Calories value={0} />
    <Text>SO</Text>
    <Image width={100} height={100} source={{ uri: "" }} />
  </View>
);

export default Meal;
