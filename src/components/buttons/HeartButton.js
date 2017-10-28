/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class HeartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToFavorite: false,
    }
    this.addToFavorite = this.addToFavorite.bind(this);
  }
  
  addToFavorite() {
    this.props.callback(!this.state.addedToFavorite, this.props.itemId);
    this.setState({
      addedToFavorite: !this.state.addedToFavorite,
    });
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {this.addToFavorite()} }
        style={styles.favoriteBtn}
      >
        <View>
          <Icon
            name={this.state.addedToFavorite ? 'heart' : 'heart-o'}
            size={18}
            color={this.state.addedToFavorite ? this.props.selectedColor : this.props.color}
          />
          <Icon
            name={'heart-o'}
            size={18}
            color={this.props.color}
            style={[
              {display: this.state.addedToFavorite ? 'flex' : 'none'},
              styles.selectedIcon
            ]}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

HeartButton.propTypes = {
  callback: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  selectedIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
  }
});
