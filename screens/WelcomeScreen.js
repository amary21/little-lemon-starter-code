import * as React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <>
    <View style={styles.container}>
      <Image 
        source={require('../assets/little-lemon-logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Little Lemon, your local{"\n"}Mediterranean Bistro</Text>
    </View>
    <View style={styles.footer}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Subscribe')}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 350,
    height: 250,
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 40,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    width: '100%',
    justifyContent: 'bottom',
    backgroundColor: '#40524C',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
