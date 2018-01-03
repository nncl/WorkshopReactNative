/**
 * @description
 * New Github repo modal component
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
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

const styles = {
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
    }
};