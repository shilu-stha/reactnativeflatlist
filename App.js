/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Button} from 'react-native';


const messages = [
  1,2,3,4,5,6,7,8,9,10,11,12,13
]

const hash = {
  1: {
    id: 1,
    message: "hello there",
    status: 'pending'
  },
  2: {
    id: 2,
    message: "hello there",
    status: 'pending'
  },
  3: {
    id: 3,
    message: "hello there",
    status: 'pending'
  },
  4: {
    id: 4,
    message: "hello there",
    status: 'pending'
  },
  5: {
    id: 5,
    message: "hello there",
    status: 'pending'
  },
  6:{
    id: 6,
    message: "hello there",
    status: 'pending'
  },
  7: {
    id: 7,
    message: "hello there",
    status: 'pending'
  },
  8: {
    id: 8,
    message: "hello there",
    status: 'pending'
  },
  9: {
    id: 9,
    message: "hello there",
    status: 'pending'
  },
  10: {
    id: 10,
    message: "hello there",
    status: 'pending'
  },
  11: {
    id: 11,
    message: "hello there",
    status: 'pending'
  },
  12:{
    id: 12,
    message: "hello there",
    status: 'pending'
  },
  13: {
    id: 13,
    message: "hello there",
    status: 'pending'
  }
}
export default class App extends Component {

  renderRow = ({item, index}) => {
    return(
      <View style={styles.row}>
        <View>
          <Text>{item.message}</Text>
          <Text>{item.status}</Text>
        </View>
        <Button style={styles.button} title='Update' onPress={() => this.update(item)}/>
      </View>
    )
  };

  update = item =>{
    Object.assign(item, { status: 'sent' })
    return item
  }

  keyExtractor = (item) => `${item.id}`;

  render() {
    return (
      <View>
        <FlatList
          enableEmptySections
          style={styles.listStyle}
          scrollEventThrottle={100}
          data={messages}
          onScroll={this.handleOnScroll}
          extraData={hash}
          keyExtractor={this.keyExtractor}
          ref={(ref) => (this.flatListRef = ref)}
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item, index}) => (
            this.renderRow({item: hash[item], index})
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    width: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  contentContainerStyle: {
    justifyContent: 'flex-end',
  },
});
