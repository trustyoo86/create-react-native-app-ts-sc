import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export default class App extends React.Component {
  render() {
    return (
      <Sc.container>
        <Text>Open up App4.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Sc.input placeholder='테스트입니다.'/>
      </Sc.container>
    );
  }
}

const Sc = {
  container: styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
  `,
  input: styled.TextInput`
    width: 300px;
    height: 50px;
    border: 1px solid #bdbdbd;
  `,
};
