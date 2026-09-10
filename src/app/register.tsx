import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { theme } from "../utils/theme";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useRegisterForm } from "../hooks/useRegisterForm";
import { REGISTER_FIELDS } from "../constants/forms";

export default function Register() {
  const router = useRouter();
  const { formData, errors, handleChange, handleRegister } = useRegisterForm();

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.title}>Cadastro</Text>

          {REGISTER_FIELDS.map(({ name, ...props }) => (
            <Input
              key={name}
              {...(props as any)}
              value={formData[name as keyof typeof formData]}
              onChangeText={(text) => handleChange(name, text)}
              error={errors[name]}
            />
          ))}

          <Button title="Cadastrar" onPress={handleRegister} variant="primary" style={{ marginTop: 16 }} />
          
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8}>
            <Text style={styles.linkText}>Já tem conta? Voltar ao Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>KittyShop™</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: theme.secondary,
    padding: 24,
    borderWidth: 3,
    borderColor: theme.black,
    borderRadius: 0,
    shadowColor: theme.black,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: theme.black,
    marginBottom: 24,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  linkText: {
    color: theme.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 24,
    color: theme.black,
    fontWeight: 'bold',
    opacity: 0.5,
  }
});
