/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';

import {
  ScrollView,
  TouchableHighlight,
  Image,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';

let windowWidth = Dimensions.get('window').width;
let cardSize = 100;
let cardMargin = 8;

if (windowWidth === 320) {
  cardSize = 90;
  cardMargin = 4;
} else if (windowWidth === 414) {
  cardSize = 115;
}

export default class Categories extends Component {
  getCategories() {
    const categories = this.props.categories;
    let cards = [];
    categories.map((category, index) => {
      cards.push(
        <TouchableHighlight
          style={styles.card}
          key={index}
        >
          <Image
            style={styles.image}
            resizeMode='contain'
            source={category.photo}
          />
        </TouchableHighlight>
      );
    })
    return cards;
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.wrapper}
        horizontal={true}
      >
        {this.getCategories()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: cardSize,
    height: cardSize,
    marginRight: cardMargin,
    marginLeft: cardMargin,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  }
});
