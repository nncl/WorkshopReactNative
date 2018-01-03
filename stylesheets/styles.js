/**
 * @description
 * Generic app stylesheet.
 */

import React, {Component} from 'react';

import {
    Platform,
    StyleSheet
} from 'react-native';

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
    },
    boxContainer: {
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        width: 280
    }
    , modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    }
    , boxTitle: {
        fontWeight: 'bold',
        fontSize: 16
    }
    , boxInput: {
        alignSelf: 'stretch',
        marginTop: 10,
        paddingVertical: 0,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#DDD',
        height: 40,
        borderRadius: 3
    }
    , buttonContainer: {
        marginTop: 10,
        height: 40,
        flexDirection: 'row'
    }
    , button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    }
    , cancelButton: {
        backgroundColor: '#E25F5F',
        marginRight: 5
    }
    , submitButton: {
        backgroundColor: '#70BD85',
        marginLeft: 5
    }
    , buttonText: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 12
    },
    repo: {
        padding: 20,
        backgroundColor: '#FFF',
        height: 120,
        marginBottom: 20,
        borderRadius: 5,
        flexDirection: 'row', // same line
        alignItems: 'center'
    },
    repoImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    repoTitle: {
        fontWeight: 'bold',
        color: '#333'
    },
    repoInfo: {
        marginLeft: 10
    },
    repoAuthor: {
        fontSize: 12,
        color: '#999'
    }
});

module.exports = styles;