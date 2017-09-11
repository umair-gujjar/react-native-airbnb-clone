/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';
import NavBarButton from '../components/buttons/NavBarButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class LogIn extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerRight: <NavBarButton callback={() => navigation.navigate('ForgotPassword')} location="right" color={colors.white} text="Forgot password" />,
    headerLeft: <NavBarButton callback={() => navigation.goBack()} location="left" icon={<Icon name="angle-left" color={colors.white} size={30} />} />,
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.formWrapper}>
          <Text style={styles.welcomeText}>Log In Screen</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.darkGreen,
    flex: 1,
    display: 'flex',
  },
  formWrapper: {
    marginTop: 80,
    padding: 20,
  }
});
