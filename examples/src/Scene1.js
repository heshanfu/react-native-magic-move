import React from "react";
import { StyleSheet } from "react-native";
import MagicMove from "./magic-move";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green"
  },
  text: {
    marginTop: 20,
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontSize: 30
  }
});

export default class Scene1 extends React.Component {
  render() {
    return (
      <MagicMove.View id="scene1" style={styles.container}>
        <MagicMove.Text id="scene1.title" style={styles.text}>
          Scene 1
        </MagicMove.Text>
      </MagicMove.View>
    );
  }
}