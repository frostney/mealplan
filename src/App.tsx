import React from 'react';
import { View, Text } from 'react-native';
import styled from '@emotion/native'
import './App.css';

import { Day } from './components'

const Week = styled.View`
  flex-direction: column;
`;

function App() {
  return (
    <Week>
      <Day name="Monday" />
      <Day name="Tuesday" />
      <Day name="Wednesday" />
      <Day name="Thursday" />
      <Day name="Friday" />
    </Week>
  );
}

export default App;
