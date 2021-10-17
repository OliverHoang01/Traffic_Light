import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import trafficLight from './assets/traffic-light.png'
import tlRed from './assets/traffic-light-red.png'
import tlYellow from './assets/traffic-light-yellow.png'
import tlGreen from './assets/traffic-light-green.png'
import { Dimensions } from 'react-native';

export default function App() {
  const [color , setColor] = useState("");
  let isColor = trafficLight;
  if(color === "red"){
    isColor = tlRed
  }
  if(color === "yellow"){
    isColor = tlYellow
  }
  if(color === "green"){
    isColor = tlGreen
  }
  function turnOn (color){
    setColor(color)
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Image source={isColor} style={styles.image} />
      <View style={styles.buttonGroup}>

        <TouchableHighlight style={[styles.button ,{backgroundColor: 'red'}]}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => turnOn("red")}
        >
            <Text style={{textAlign: 'center', color: '#fff'}}>Red</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.button ,{backgroundColor: '#FF9933'}]}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => turnOn("yellow")}
        >
            <Text style={{textAlign: 'center', color: '#fff'}}>Yellow</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.button ,{backgroundColor: 'green'}]}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => turnOn("green")}
        >
            <Text style={{textAlign: 'center', color: '#fff'}}>Green</Text>
        </TouchableHighlight>

      </View>
      <View style ={{alignItems: 'center',height: 100,justifyContent:'center'}}>
        <TouchableHighlight style={[styles.button ,{backgroundColor: 'gray'}]}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => turnOn("")}
          >
              <Text style={{textAlign: 'center', color: '#fff'}}>Reset</Text>
          </TouchableHighlight>
        </View>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  image: {
    width: windowWidth,
    height: (windowWidth * 1183) / 1080,
    marginTop: 30,

  },
  buttonGroup: {
    marginTop: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  button: {
    width: 80,
    paddingVertical: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
