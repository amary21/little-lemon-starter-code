import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, Pressable, Alert } from 'react-native';

const SubscribeScreen = () => {
  const [email, setEmail] = useState('');
  const isDisabled = email.trim().length === 0;

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/little-lemon-logo-grey.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Type your email" 
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <Pressable
        disabled={isDisabled}
        onPress={() => Alert.alert(`Thank you for subscribing ${email}, stay tuned!`)}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: isDisabled
              ? '#9fa5a1'
              : pressed
                ? '#40524C'
                : '#495E57',
          },
        ]}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 30,
    marginHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 150,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
    marginHorizontal: 40,
  },
  button: {
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SubscribeScreen;
