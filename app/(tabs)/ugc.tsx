import React from 'react';
import { useState } from 'react';
import { TextInput, Text, View, StyleSheet, ScrollView, Keyboard, TouchableOpacity } from 'react-native';


export default function HomeScreen () {
    const [title, setTitle] = useState(''); 
    const [content, setContent] = useState('');

    return (
        <View style={styles.container}> 
            <Text style={styles.header}>UGC Page</Text>
            <ScrollView> 
                <View style={styles.textInputOne}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Name of the Street"
                        placeholderTextColor={'#888'}
                        value={title}
                        onChangeText={setTitle}
                        onBlur={() => Keyboard.dismiss()}
                    />
                </View>
                <View style={styles.textInputTwo}>
                    <TextInput
                        multiline ={true}
                        placeholderTextColor={'#888'}
                        style={styles.inputTwo}
                        placeholder= "Cleaning date & odd/even side"
                        value={content}
                        onChangeText={setContent}
                        onBlur={() => Keyboard.dismiss()}
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Publish Here</Text>
                </TouchableOpacity>
            </ScrollView>  
        </View>       
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        flex: 1,
    }, 

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,

    },

    textInputOne: {
        paddingTop: 1,
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
    },

    input: {
        height: 40, 
        width: 300,
        borderRadius: 15,
        borderColor: "gray",
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    }, 
    textInputTwo: {
        paddingTop: 10,
        marginBottom: 12,
        backgroundColor: '#D9D9D9',
    },
    inputTwo: {
        height: 150,
        width: 300,
        borderRadius: 15,
        backgroundColor: '#f0f0f0',
        borderColor: "gray", 
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    
    button: {
        backgroundColor: 'black',
        paddingVertical: 12, 
        paddingTop: 10,
        width: 250,
        borderRadius: 15,
        left: 26,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },

    buttonText: {
        textAlign: 'center',
        color: 'white',
        shadowColor: '#000',
    }
}); 