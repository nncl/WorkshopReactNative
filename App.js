/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
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

    async componentDidMount() {
        const repos = JSON.parse(await AsyncStorage.getItem('@Minicourse:repos')) || [];

        this.setState({repos});
    }

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

        await AsyncStorage.setItem('@Minicourse:repos', JSON.stringify(this.state.repos));
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

const styles = require('./stylesheets/styles');