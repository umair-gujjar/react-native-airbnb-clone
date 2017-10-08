/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from '../components/explore/Categories';
import categoriesList from '../data/categories';

import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

export default class ExploreContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'EXPLORE',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='ios-search'
        size={22}
        color={tintColor}
      />
    ),
  };

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <Categories categories={categoriesList} />
        <Text style={styles.welcomeText}>Explore Tab</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    marginTop: 50,
  },
});
