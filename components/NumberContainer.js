import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import BodyText from './BodyText';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <BodyText style={styles.text}>{props.children}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical:10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.accent,
    fontSize: 22
  }
});

export default NumberContainer;
