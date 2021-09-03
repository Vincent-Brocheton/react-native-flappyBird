import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {GameEngine} from "react-native-game-engine";
import entities from './entities'

export default function App() {
  return (
    <View style={{flex:1}}>
      <GameEngine
          entities={entities()}
      style={{
        position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}
      >

      </GameEngine>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}
