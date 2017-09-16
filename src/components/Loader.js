/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../styles/colors';
import {
  View,
  Image,
  Modal,
  StyleSheet,
} from 'react-native';

export default class Loader extends Component {
  render() {
    return (
      <Modal
        animationType={this.props.animationType}
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
       >
         <View style={styles.wrapper}>
           <View style={styles.loaderContainer}>
             <Image
               style={styles.loaderImage}
               source={require('../img/loading.gif')}
             />
           </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  loaderContainer: {
    width: 90,
    height: 90,
    backgroundColor: colors.white,
    borderRadius: 15,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -45,
    marginTop: -45,
  },
  loaderImage: {
    width: '70%',
    height: '70%',
    width: 90,
    height: 90,
    borderRadius: 15,
  }
});
