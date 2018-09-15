import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-primitives";

const Button = ({ children, pseudo: { hover, active, focue }, ...rest }) => (
    <Text
      style={[
        styles.button
      ]}
      {...rest}
    >{ children } {console.log(hover)}</Text>
)

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 24,
    backgroundColor: "red",
    borderColor: "red",
    borderWidth: 1,
  }
})

export default Button;
