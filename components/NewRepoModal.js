/**
 * @description
 * New Github repo modal component
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity
} from 'react-native';

export default class NewRepoModal extends Component {
    state = {
        newRepoText: ''
    };

    _addRepoRemotely = (newRepoText) => {
        this.props.onAdd(newRepoText);
        this.setState({
            newRepoText: ''
        });
    };

    render() {
        return (
            <Modal animationType="fade"
                   transparent={true}
                   visible={this.props.visible}>

                <View style={styles.modalContainer}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.boxTitle}>Add Repo</Text>
                        <TextInput autoFocus
                                   autocapitalize="none"
                                   style={styles.boxInput}
                                   underlineColorAndroid="rgba(0,0,0,0)"
                                   placeholder="Org/Repo"
                                   value={this.state.newRepoText}
                                   onChangeText={newRepoText => this.setState({newRepoText})}/>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.cancelButton]}
                                onPress={this.props.onCancel}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.submitButton]}
                                onPress={() => this._addRepoRemotely(this.state.newRepoText)}>
                                <Text style={styles.buttonText}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        )
            ;
    }
}

const styles = require('../stylesheets/styles');