import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {GameEngine} from "react-native-game-engine";
import entities from './entities';
import Physics from './physics';

export default function App() {
    const [running, setRunning] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    useEffect(()=>{
        setRunning(true)
    }, [])

  return (
    <View style={{flex:1}}>
      <GameEngine
          systems={[Physics]}
          entities={entities()}
          running={running}
          onEvent={(e) => {
              switch (e.type) {
                  case 'game_over':
                      setRunning(false)
                      break;
              }
          }}
      style={{
        position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}
      >

      </GameEngine>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

