import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-primitives";
import AccessibleComponent from "./AccessibleComponent"

class ButtonPresenter extends React.Component {
  render() {
    const {
      children,
      pseudo: { hover, active, focue, disabled } = {},
      style,
      ...rest
    } = this.props
    return (
      <Text>
        <View
            accessibilityRole="button"
            style={[
              styles.button,
              hover && styles.hoverButton,
              active && styles.activeButton,
              style
            ]}
            {...rest}
        >
          <Text
            style={[
              hover && styles.hoverText,
            ]}
          >
            { children }
          </Text>
        </View>
      </Text>
    )
  }
}

const Button = ({
  disabled,
  ...rest
}) => {
  return (
    <AccessibleComponent
      render={(data) => (
        <ButtonPresenter {...data} />
      )}
      accessibilityRole="button"
      disabled={disabled}
      {...rest}
    />
  );
};

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
  }
})

export default Button;
