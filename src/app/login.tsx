import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { theme } from "../utils/theme";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useLoginForm } from "../hooks/useLoginForm";
import { LOGIN_FIELDS } from "../constants/forms";

export default function Login() {
  const router = useRouter();
  const { formData, error, handleChange, handleLogin, navigateTo } = useLoginForm();

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.title}>Entrar</Text>
          
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {LOGIN_FIELDS.map(({ name, ...props }) => (
            <Input
              key={name}
              {...(props as any)}
              value={formData[name as keyof typeof formData]}
              onChangeText={(text) => handleChange(name, text)}
            />
          ))}

          <Button title="Entrar" onPress={handleLogin} variant="primary" style={{ marginTop: 16 }} />
          
          <TouchableOpacity onPress={() => router.push("/register")} activeOpacity={0.8}>
            <Text style={styles.linkText}>Não tem conta? Cadastre-se</Text>
          </TouchableOpacity>

          <View style={styles.separator}>
            <View style={styles.line} />
            <Text style={styles.separatorText}>OU ENTRE COM</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialButtons}>
            <View style={{flex: 1, marginRight: 8}}>
              <Button
                title="Google"
                variant="social"
                iconName="google"
                onPress={() => {
                  console.log("Login Google");
                  navigateTo("/home");
                }}
              />
            </View>
            <View style={{flex: 1, marginLeft: 8}}>
              <Button
                title="Github"
                variant="social"
                iconName="github"
                onPress={() => {
                  console.log("Login Github");
                  navigateTo("/home");
                }}
              />
            </View>
          </View>

          <Button
            title="Entrar sem conta"
            variant="secondary"
            onPress={() => {
              console.log("Entrar sem conta");
              navigateTo("/home");
            }}
            style={{ marginTop: 16 }}
          />
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
  errorText: {
    color: theme.error,
    fontWeight: 'bold',
    marginBottom: 16,
    backgroundColor: theme.errorBg,
    padding: 10,
    borderWidth: 2,
    borderColor: theme.error,
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
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: theme.black,
  },
  separatorText: {
    marginHorizontal: 12,
    fontSize: 14,
    fontWeight: '900',
    color: theme.black,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 24,
    color: theme.black,
    fontWeight: 'bold',
    opacity: 0.5,
  }
});
