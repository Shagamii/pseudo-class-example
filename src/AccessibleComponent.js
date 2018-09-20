import React, { Component } from "react";
import { Touchable, Text } from "react-primitives";

const triggerableAccessibilityRole = [
  "link",
  "button"
]

class AccessibleComponent extends Component {

  state = {
    focus: false,
    active: false,
    hover: false
  }

  onPressIn = () => {
    this.setState({
      active: true,
    });

    const { onPressIn } = this.props;
    if (onPressIn) {
      onPressIn();
    }
  };

  onKeyDown = (e) => {
    const { key } = e
    const { onPress, onKeyDown } = this.props;
    if (key === "Enter" && onPress) {
      onPress();
    }

    if (onKeyDown) {
      onKeyDown();
    }
  };

  onMouseLeave = () => {
    this.setState({
      hover: false
    });

    const { onMouseLeave } = this.props;
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  onFocus = () => {
    this.setState({ focus: true });

    const { onFocus } = this.props;
    if (onFocus) {
      onFocus();
    }
  };

  onBlur = () => {
    this.setState({ focus: false });

    const { onBlur } = this.props;
    if (onBlur) {
      onBlur();
    }
  };

  onPressOut = () => {
    this.setState({
      active: false,
    });

    const { onPressOut } = this.props;
    if (onPressOut) {
      onPressOut();
    }
  };

  onMouseEnter = () => {
    this.setState({
      hover: true
    });

    const { onMouseEnter } = this.props;
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  renderPropsChildren = () => {
    const { accessibilityRole, inputProps, children } = this.props;
    return (
      <React.Fragment>
        {
          (!accessibilityRole || !triggerableAccessibilityRole.includes(accessibilityRole)) && (
          <Text
            accessibilityRole="button"
            style={{
              width: 0,
              height: 0,
              position: "absolute"
            }}
            onFocus={this.onFocus}
            onKeyDown={this.onKeyDown}
            onBlur={this.onBlur}
            {...inputProps}
          />
        )}
        {children}
      </React.Fragment>
    );
  };

  render() {
    const {
      disabled,
      render,
      accessibilityRole,
      ...rest
    } = this.props;
    const { focus, hover, active } = this.state;
    const pseudo = {
      focus,
      hover,
      active,
      disabled
    };

    const renderData = {
      children: this.renderPropsChildren(),
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onFocus: this.onFocus,
      onKeyDown: this.onKeyDown,
      onBlur: this.onBlur,
      accessibilityRole,
      pseudo
    };
   return (
      <Touchable
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        disabled={disabled}
        {...rest}
      >
        {render(renderData)}
      </Touchable>
    );
  }
}


export default AccessibleComponent;
