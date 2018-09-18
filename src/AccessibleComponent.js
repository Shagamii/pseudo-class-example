import React, { Component } from "react";
import { Touchable, Text } from "react-primitives";

class AccessibleComponent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.state = {
      focus: false,
      active: false,
      hover: false
    };
  }

  onPressIn = () => {
    console.log("hoge")
    this.setState({
      focus: true,
      active: true
    });

    const { onPressIn } = this.props;
    if (onPressIn) {
      onPressIn();
    }
  };

  onKeyPress = (e) => {
    const { key } = e;
    if (key === "Tab") {
      this.setState({ focus: false });
      // if (this.inputRef.current) {
      //   this.inputRef.current.blur();
      // }
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
      active: false
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
        {accessibilityRole != null && (
          <Text
            accessibilityRole={accessibilityRole}
            ref={this.inputRef}
            style={{
              width: 0,
              height: 0,
              position: "absolute"
            }}
            onFocus={this.onFocus}
            onKeyPress={this.onKeyPress}
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
      pseudo
    };
   return (
      <Touchable
        onPress={() => console.log("hoge")}
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
