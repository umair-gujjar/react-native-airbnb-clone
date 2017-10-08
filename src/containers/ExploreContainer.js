/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from '../components/explore/Categories';
import categoriesList from '../data/categories';
import colors from '../styles/colors';
import SearchBar from '../components/SearchBar';
import {
  ScrollView,
  Text,
  View,
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
      <View style={styles.wrapper}>
      <SearchBar />
      <ScrollView style={styles.scrollview}>
        <Text style={styles.heading}>Explore Airbnb</Text>
        <Categories categories={categoriesList} />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollview: {
    paddingTop: 100,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    marginBottom: 20,
    color: colors.gray02,
  }
});
