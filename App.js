/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Minicourse!
                    </Text>
                </View>

                <ScrollView contentContainerStyle={styles.repoList}>
                    <View style={styles.repo}/>
                    <View style={styles.repo}/>
                    <View style={styles.repo}/>
                    <View style={styles.repo}/>
                    <View style={styles.repo}/>
                    <View style={styles.repo}/>
                    <View style={styles.repo}/>
                    <View style={styles.repo}/>
                    <View style={styles.repo}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333'
    },
    header: {
        height: (Platform.OS === 'ios') ? 70 : 50,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    repoList: {
        padding: 20
    },
    repo: {
        padding: 20,
        backgroundColor: '#FFF',
        height: 120,
        marginBottom: 20,
        borderRadius: 5
    }
});
