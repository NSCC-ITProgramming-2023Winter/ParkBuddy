import React from 'react';
import { useState } from 'react';
import { TextInput, Text, View, StyleSheet, ScrollView, Keyboard, Button } from 'react-native';


export default function HomeScreen () {
    const [title, setTitle] = useState(''); 
    const [content, setContent] = useState('');

    return (
        <View style={styles.container}> 
            <Text style={styles.header}>UGC</Text>
            <ScrollView> 
                <View style={styles.textInputOne}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Title"
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
                        placeholder= "content goes here"
                        value={content}
                        onChangeText={setContent}
                        onBlur={() => Keyboard.dismiss()}
                        
                    />
                </View>
                <Button title="Publish Here" color={styles.button.backgroundColor} onPress={() => {}} >Publish Here </Button>
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
    textInputOne: {
        paddingTop: 1,
        backgroundColor: 'White',
        borderRadius: 20,
    },
    textInputTwo: {
        paddingTop: 10,

    },
    input: {
        height: 40, 
        width: 300,
        borderColor: "gray",
        backgroundColor: 'White', 
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    }, 

    inputTwo: {
        height: 100,
        width: 300,
        borderColor: "gray",
        backgroundColor: 'White', 
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    pageTitle: {
        textAlign: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },

    button: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        width: 100,
        textAlign: 'center',
        margin: 10,
    }
}); 