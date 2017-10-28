/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from '../components/explore/Categories';
import Listings from '../components/explore/Listings';
import categoriesList from '../data/categories';
import colors from '../styles/colors';
import SearchBar from '../components/SearchBar';
import listings from '../data/listings';

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
  
  constructor(props) {
    super(props);

    this.state = {
      listings: {},
    }
  }
  
  componentWillMount() {
    const listingsArray = [];

    listings.map((val, i) => {
      listingsArray.push(
        <View
          key={i}
          style={styles.listingWrapper}
        >
          <Listings
            key={i}
            title={val.title}
            boldTitle={val.boldTitle}
            listings={val.listings}
            showAddToFav={val.showAddToFav}
          />
        </View>
      );
    });
    this.setState({
      listings: listingsArray,
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
      <SearchBar />
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Text style={styles.heading}>Explore Airbnb</Text>
        <View style={styles.categories}>
          <Categories categories={categoriesList} />
        </View>
        {this.state.listings}
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
  scrollViewContent: {
    paddingBottom: 80,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    marginBottom: 20,
    color: colors.gray02,
  },
  listingWrapper: {
    marginBottom: 45,
  },
  categories: {
    marginBottom: 40,
  }
});
