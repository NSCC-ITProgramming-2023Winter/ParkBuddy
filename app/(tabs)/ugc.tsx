import React, { useState } from 'react';
import { 
    TextInput, Text, View, StyleSheet, ScrollView, 
    Keyboard, TouchableOpacity, Alert, ActivityIndicator 
} from 'react-native';
import Select from 'react-select';  // Import react-select
import base64 from 'base-64';
import utf8 from 'utf8';

const categories = [
    { id: 2, label: "Uncategorized" },
    { id: 3, label: "street cleaning" },
    { id: 4, label: "Opinion" },
    { id: 5, label: "Events" }
];

const postApiUrl = "https://159.89.114.75/wp-json/wp/v2/posts";

export default function HomeScreen() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState(categories[0]);
    const [isLoading, setIsLoading] = useState(false);

    // WordPress Authentication
    const username = "admin";
    const password = "od4A sodf INg2 hTv0 0WGe ZLIA";
    const credentials = `${username}:${password}`;
    const bytes = utf8.encode(credentials);
    const basicAuth = base64.encode(bytes);

    // Create Post
    const createPost = async () => {
        const postData = new URLSearchParams();
        postData.append('title', title);
        postData.append('content', content);
        postData.append('categories', category.id.toString());
        postData.append('status', 'publish');

        const response = await fetch(postApiUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + basicAuth,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: postData.toString()
        });

        if (!response.ok) {
            throw new Error('Post creation failed');
        }

        return await response.json();
    };

    const handlePublish = async () => {
        if (!title || !content) {
            Alert.alert('Validation Error', 'Title and content cannot be empty.');
            return;
        }

        setIsLoading(true);
        try {
            const post = await createPost();
            Alert.alert('Success', `Post created with ID: ${post.id}`);
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>UGC Page</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
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
                        multiline={true}
                        placeholderTextColor={'#888'}
                        style={styles.inputTwo}
                        placeholder="Cleaning date & odd/even side"
                        value={content}
                        onChangeText={setContent}
                        onBlur={() => Keyboard.dismiss()}
                    />
                </View>
                <View style={styles.picker}>
                    <Text>Select Category:</Text>
                    <Select
                        value={category}
                        onChange={setCategory}
                        options={categories}
                        getOptionLabel={(e) => e.label}
                        getOptionValue={(e) => e.id}
                    />
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handlePublish}>
                    {isLoading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text style={styles.buttonText}>Publish</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20,
    },

    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 100,
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

    buttonContainer: {
        justifyContent: 'center', // Centering the button container
        alignItems: 'center', // Centering the button horizontally
        marginBottom: 20, // Optional, to give some space from the bottom
    },

    button: {
        backgroundColor: 'black',
        paddingVertical: 12,
        width: 250,
        borderRadius: 15,
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
    },

    picker: {
        marginVertical: 10,
    },
});