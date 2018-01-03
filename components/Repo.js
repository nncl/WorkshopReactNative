/**
 * @description
 * Github repo component
 */

import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

export default class Repo extends Component {
    render() {
        return (
            <View style={styles.repo}>
                <Image style={styles.repoImage}
                       source={{uri: this.props.data.thumbnail}}/>

                <View style={styles.repoInfo}>
                    <Text style={styles.repoTitle}>{this.props.data.title}</Text>
                    <Text style={styles.repoAuthor}>{this.props.data.author}</Text>
                </View>
            </View>
        );
    }
}

const styles = require('../stylesheets/styles');