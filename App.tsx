import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  state={
    myState:"HALLOOOO (TAP ME)",
  }

  updateState = () => this.setState({ myState: 'HAIIII' })

   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.font}>JEESUS TAKE THE WHEEL</Text>
            <Text onPress={this.updateState}>{this.state.myState}</Text>
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
  font:{
    fontWeight: "bold",
    fontSize: 20,
  }
});
