import React from 'react';
import { AccessibleComponent, Button } from "pseudo-class-example"
import { StyleSheet, View } from "react-primitives"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AccessibleComponent
          render={(data) => (
            <Button {...data}>ボタン</Button>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
