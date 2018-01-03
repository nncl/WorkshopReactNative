/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ScrollView
} from 'react-native';

import Repo from './components/Repo';

export default class App extends Component {

    state = {
        repos: [
            {
                id: 1,
                thumbnail: 'https://avatars0.githubusercontent.com/u/189580',
                title: 'Multer',
                author: 'expressjs'
            },
            {
                id: 2,
                thumbnail: 'https://avatars2.githubusercontent.com/u/2151889',
                title: 'Kue',
                author: 'Automattic'
            }
        ]
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        React Native Minicourse!
                    </Text>

                    <TouchableOpacity onPress={() => {
                    }}>
                        <Text style={styles.headerButton}>+</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.repoList}>
                    { this.state.repos.map(repo => <Repo key={repo.id} data={repo}/>)}
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
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    headerButton: {
        fontSize: 24,
        fontWeight: 'bold'
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
    }
});
