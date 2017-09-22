/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { transparentHeaderStyle } from '../styles/navigation';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const navigateToTabsAction = NavigationActions.navigate({
  routeName: 'LoggedIn'
});

export default class TurnOnNotifications extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: null,
    headerStyle: transparentHeaderStyle,
    gesturesEnabled: false,
  });

  constructor(props) {
    super(props);
    this.state = {
      pressStatusNotifyBtn: false,
      pressStatusSkipBtn: false,
    };

    this._onNotifyBtnHideUnderlay = this._onNotifyBtnHideUnderlay.bind(this);
    this._onNotifyBtnShowUnderlay = this._onNotifyBtnShowUnderlay.bind(this);
    this._onSkipBtnHideUnderlay = this._onSkipBtnHideUnderlay.bind(this);
    this._onSkipBtnShowUnderlay = this._onSkipBtnShowUnderlay.bind(this);
  }

  _onNotifyBtnHideUnderlay() {
    this.setState({ pressStatusNotifyBtn: false });
  }

  _onNotifyBtnShowUnderlay() {
    this.setState({ pressStatusNotifyBtn: true });
  }

  _onSkipBtnHideUnderlay() {
    this.setState({ pressStatusSkipBtn: false });
  }

  _onSkipBtnShowUnderlay() {
    this.setState({ pressStatusSkipBtn: true });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Icon
            name="comments-o"
            size={46}
            style={styles.icon}
          />
          <Text style={styles.title}>
            Turn on notifications?
          </Text>
          <Text style={styles.description}>
            We can let you know when someone messages you, or notify you about other important account activity.
          </Text>
          <TouchableHighlight
            style={[{backgroundColor: this.state.pressStatusNotifyBtn ? colors.darkGreen02 : colors.darkGreen}, styles.notifyButton]}
            onPress={() => { this.props.navigation.dispatch(navigateToTabsAction); }}
            onHideUnderlay={this._onNotifyBtnHideUnderlay}
            onShowUnderlay={this._onNotifyBtnShowUnderlay}
            underlayColor={colors.darkGreen02}
          >
            <Text style={[{color: colors.white}, styles.buttonText]}>Yes, notify me</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[{backgroundColor: this.state.pressStatusSkipBtn ? colors.gray01 : 'transparent'}, styles.skipButton]}
            onPress={() => { this.props.navigation.dispatch(navigateToTabsAction); }}
            onHideUnderlay={this._onSkipBtnHideUnderlay}
            onShowUnderlay={this._onSkipBtnShowUnderlay}
            underlayColor={colors.gray01}
          >
            <Text style={[{color: colors.darkGreen}, styles.buttonText]}>Skip</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  content: {
    marginTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    color: colors.darkGreen,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: colors.black,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    paddingRight: 30,
    marginTop: 15,
    lineHeight: 22,
  },
  notifyButton: {
    width: 160,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 3,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center'
  },
  skipButton: {
    width: 100,
    borderColor: colors.darkGreen,
    borderWidth: 2,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 3,
    marginTop: 15,
  }
});
