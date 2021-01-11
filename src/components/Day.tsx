import React from 'react';
import { View, Text } from 'react-native';

type Props = {
    name: string
}

const Day = ({ name }: Props) => (
    <View>
        <View>
<Text>{name}</Text>
        </View>
        <View>
<Text>Breakfast</Text>
        </View>
        <View>
<Text>Lunch</Text>
        </View>
        <View>
<Text>Dinner</Text>
        </View>
    </View>
);

export default Day;