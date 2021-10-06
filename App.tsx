import React from 'react';
import { Introduction } from './src/screens/Introduction'
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <Routes />
      {/* <Introduction title="Organize seus" title2="campeonatos" subtitle="Jogue campeonatos" subtitle2="e faça amizade" /> */}

    </>
  );
}

