import React from "react";
import { ActivityIndicator, View, Text, StyleSheet, Image } from "react-native";
import { theme } from "../utils/theme";

export function LoadingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={require('../assets/logoCostela.png')} 
          style={styles.logo} 
          resizeMode="contain" 
        />
        <ActivityIndicator size="large" color={theme.accent} style={styles.spinner} />
        <Text style={styles.title}>KittyShop™</Text>
        <Text style={styles.subtitle}>Carregando fofuras...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.primary,
  },
  card: {
    backgroundColor: theme.secondary,
    padding: 32,
    borderWidth: 3,
    borderColor: theme.black,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: theme.black,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  spinner: {
    marginBottom: 16,
    transform: [{ scale: 1.2 }],
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: theme.black,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.black,
    textTransform: 'uppercase',
  }
});
