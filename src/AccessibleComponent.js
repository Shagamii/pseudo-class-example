import React, { Component } from "react";
import { Touchable, Text } from "react-primitives";

class AccessibleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      active: false,
      hover: false
    };
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
    const { key } = e;
    if (key === "Tab") {
      this.setState({ focus: false });
    }

    const { onPress } = this.props;
    if (key === "Enter" && onPress) {
      onPress();
    }
  };

  onMouseLeave = () => {
    this.setState({
      hover: false
    });
  };

  onFocus = () => {
    this.setState({ focus: true });
  };

  onBlur = () => {
    this.setState({ focus: false });
  };

  onPressOut = () => {
    const { onPressOut } = this.props;
    if (onPressOut) {
      onPressOut();
    }

    this.setState({
      active: false,
    });
  };

  onMouseEnter = () => {
    this.setState({
      hover: true
    });
  };

  renderPropsChildren = () => {
    const { accessibilityRole, inputProps, children } = this.props;
    return (
      <React.Fragment>
        {!accessibilityRole && (
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
        onPress={this.onPress}
        disabled={disabled}
        {...rest}
      >
        {render(renderData)}
      </Touchable>
    );
  }
}


export default AccessibleComponent;
