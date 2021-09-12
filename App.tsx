import React from 'react';
import { ScreenOne } from './src/screens/Introduction'
import { StatusBar } from 'react-native';

export default function App() {
  return (<>
    <StatusBar hidden={true} />
    <ScreenOne />

  </>
  );
}

