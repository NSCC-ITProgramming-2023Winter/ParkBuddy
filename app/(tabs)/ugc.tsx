import React, { useState } from 'react';
import { 
    TextInput, Text, View, StyleSheet, ScrollView, 
    Keyboard, TouchableOpacity, Alert, ActivityIndicator, Picker 
} from 'react-native';
import base64 from "base-64";
import utf8 from "utf8";

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
    const [category, setCategory] = useState(categories[0].id);
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
        postData.append('categories', category.toString()); 
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
                    <Picker
                        selectedValue={category}
                        onValueChange={(itemValue) => setCategory(itemValue)}
                    >
                        {categories.map((cat) => (
                            <Picker.Item key={cat.id} label={cat.label} value={cat.id} />
                        ))}
                    </Picker>
                </View>
                <TouchableOpacity style={styles.button} onPress={handlePublish}>
                    {isLoading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text style={styles.buttonText}>Publish Here</Text>
                    )}
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
    },

    picker: {
        marginVertical: 10,
    }
});