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
import InputField from '../components/form/InputField';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class LogIn extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerRight: <NavBarButton
                   callback={() => navigation.navigate('ForgotPassword')}
                   location="right"
                   color={colors.white}
                   text="Forgot password"
                  />,
    headerLeft: <NavBarButton
                  callback={() => navigation.goBack()}
                  location="left"
                  icon={
                    <Icon
                      name="angle-left"
                      color={colors.white}
                      size={30}
                    />
                  }
                />,
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white
  });
  
  constructor(props) {
    super(props);
    this.state = {
      topBorderColor: 'transparent',
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    if (event.nativeEvent.contentOffset.y > 40) {
      this.setState({
        topBorderColor: colors.semiTransparentWhite
      });
    } else {
      this.setState({
        topBorderColor: 'transparent'
      });
    }
  }

  render() {
    const topBorderColor = this.state.topBorderColor;
    return (
      <View style={styles.wrapper}>
        <View style={[{borderTopColor: topBorderColor},styles.scrollViewWrapper]}>
          <ScrollView
            style={styles.formWrapper}
            onScroll={this.handleScroll}
            scrollEventThrottle={16}
          >
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              customStyle={{marginBottom: 30}}
              textColor={colors.white}
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              inputBorderColor={colors.semiTransparentWhite}
              inputType="text"
            />
            <InputField
              customStyle={{marginBottom: 30}}
              textColor={colors.white}
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              inputBorderColor={colors.semiTransparentWhite}
              inputType="password"
            />
          </ScrollView>
        </View>
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
  },
  loginHeader: {
    fontSize: 25,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  scrollViewWrapper: {
    marginTop: 70,
    borderTopWidth: 1,
  }
});
