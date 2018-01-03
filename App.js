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
import NewRepoModal from './components/NewRepoModal';

export default class App extends Component {

    /*
     repos : [{
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
     }]
     */

    state = {
        modalVisible: false,
        repos: []
    };

    /**
     * @description
     * Add repo.
     *
     * @param {String} newRepoText
     * @private
     */

    _addRepo = async (newRepoText) => {
        const repoCall = await fetch(`http://api.github.com/repos/${newRepoText}`)
            , response = await repoCall.json();

        const newRepo = {
            id: response.id
            , thumbnail: response.owner.avatar_url
            , title: response.name
            , author: response.owner.login
        };

        this.setState({
            modalVisible: false
            , repos: [
                ...this.state.repos // Add all existent repos
                , newRepo
            ]
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        React Native Minicourse!
                    </Text>

                    <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                        <Text style={styles.headerButton}>+</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.repoList}>
                    { this.state.repos.map(repo => <Repo key={repo.id} data={repo}/>)}
                </ScrollView>

                <NewRepoModal onCancel={() => this.setState({modalVisible: false})}
                              onAdd={this._addRepo}
                              visible={this.state.modalVisible}/>
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
