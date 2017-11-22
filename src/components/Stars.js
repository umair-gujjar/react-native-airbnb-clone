/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Stars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: []
    };
  }

  componentWillMount() {
    const starsNumber = parseInt(this.props.votes);
    const stars = [];
    for(let i = 0; i < 5; i++) {
      stars.push(
        <Icon
          key={i}
          name='star'
          size={this.props.size}
          color={starsNumber > i ? this.props.color : colors.gray04}
          style={styles.star}
        />
      );
    }
    this.setState({
      stars: stars,
    });
  }

  render() {
    if (this.props.votes === '0') {
      return (
        <View></View>
      );
    }

    const starsNumber = this.props.votes ? <Text style={styles.starsNumber}>{this.props.votes}</Text> : null;
    return (
      <View style={styles.wrapper}>
        <View style={styles.stars}>
          {this.state.stars}
          {starsNumber}
        </View>
      </View>
    );
  }
}

Stars.propTypes = {
  votes: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginRight: 1,
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsNumber: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
    marginLeft: 3,
  }
});
