import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-primitives";
import AccessibleComponent from "./AccessibleComponent"

const ButtonPresenter = ({
  children,
  pseudo: { hover, active, focus, disabled } = {},
  accessibilityRole,
  style,
  ...rest
}) => (
  <Text>
    <View
        style={[
          styles.button,
          hover && styles.hoverButton,
          focus && styles.focusButton,
          focus && {
            outline: "none"
          },
          active && styles.activeButton,
          style
        ]}
        accessibilityRole={accessibilityRole}
        {...rest}
    >
      <Text
        style={[
          (hover || focus) && styles.hoverText,
        ]}
      >
        { children }
      </Text>
    </View>
  </Text>
)

const Button = ({
  disabled,
  ...rest
}) => (
  <AccessibleComponent
    render={(data) => (
      <ButtonPresenter {...data} />
    )}
    accessibilityRole="button"
    disabled={disabled}
    {...rest}
  />
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 24,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
  hoverButton: {
    backgroundColor: "black",
  },
  hoverText: {
    color: "white"
  },
  activeButton: {
    backgroundColor: "gray"
  },
  focusButton: {
    backgroundColor: "red"
  }
})

export default Button;
