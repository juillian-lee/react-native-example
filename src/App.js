import React, {Component} from 'react';
import {Text} from 'react-native';
import AppStyle from './app.style';

export default class App extends Component {
    render() {
        return <Text style={AppStyle.ex}>Hello World</Text>   
    }
}