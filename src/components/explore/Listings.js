/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Stars from '../Stars';
import colors from '../../styles/colors';

import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

let cardSize = 157;
let cardMargin = 6;

export default class Listings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: {},
    }
  }
  
  getRandomColor() {
    const colorsList = [
      colors.gray02,
      colors.darkOrange,
      colors.black,
      colors.brown01,
      colors.blue,
      colors.brown02,
      colors.green,
    ];
    return colorsList[Math.floor(Math.random()*colorsList.length)];
  }

  componentWillMount() {
    const listings = this.props.listings;
    const listingsArray = [];
    listings.map((val, i) => {
      listingsArray.push(
        <TouchableHighlight
          key={i}
          style={styles.card}
        >
          <View style={styles.cardContent}>
            <Image
              style={styles.image}
              resizeMode='contain'
              source={val.photo}
            />
            <Text style={[{color: this.getRandomColor()},styles.listingType]}>{val.type}</Text>
            <Text
              style={styles.listingTitle}
              numberOfLines={2}
            >
              {val.title}
            </Text>
            <Text style={styles.listingPrice}>€{val.price} {val.priceType}</Text>
            <Stars votes={val.stars} size={10} color={colors.darkGreen} />
          </View>
        </TouchableHighlight>
      );
    });

    this.setState({
      listings: listingsArray,
    });
  }

  render() {
    let titleStyle = {fontSize: 18};
    if (this.props.boldTitle) {
      titleStyle = {fontSize: 22, fontWeight: '600'}
    }

    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={[titleStyle,styles.title]}>{this.props.title}</Text>
          <TouchableOpacity style={styles.seeAllBtn}>
            <Text style={styles.seeAllBtnText}>See all</Text>
            <Icon
              name='angle-right'
              size={18}
              color={colors.gray02}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{paddingRight: 30}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {this.state.listings}
        </ScrollView>
      </View>
    );
  }
}

Listings.propTypes = {
  title: PropTypes.string.isRequired,
  boldTitle: PropTypes.bool,
  listings: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  title: {
    color: colors.gray02,
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 21,
    paddingRight: 21,
  },
  seeAllBtn: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAllBtnText: {
    color: colors.gray02,
    marginRight: 5,
  },
  scrollView: {
    marginTop: 20,
    paddingLeft: 15,
  },
  card: {
    marginRight: cardMargin,
    marginLeft: cardMargin,
    display: 'flex',
    flexDirection: 'column',
    width: cardSize,
    minHeight: 100,
  },
  imageWrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: undefined,
    height: 100,
    borderRadius: 3,
    marginBottom: 7,
  },
  listingType: {
    fontWeight: '700',
    fontSize: 10,
  },
  listingTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.gray02,
    marginTop: 2,
  },
  listingPrice: {
    color: colors.gray02,
    marginTop: 4,
    marginBottom: 2,
    fontSize: 12,
    fontWeight: '300',
  },
});
