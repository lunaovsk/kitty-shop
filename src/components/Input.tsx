import React from 'react';
import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native';
import { theme } from '../utils/theme';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

export function Input({ label, error, style, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          error ? styles.inputError : null,
          style
        ]}
        placeholderTextColor={theme.gray}
        {...props}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.black,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: theme.white,
    borderWidth: 2,
    borderColor: theme.black,
    padding: 14,
    fontSize: 16,
    color: theme.black,
    fontWeight: '500',
  },
  inputError: {
    borderColor: theme.error,
  },
  errorText: {
    color: theme.error,
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 4,
    backgroundColor: theme.errorBg,
    padding: 8,
    borderWidth: 2,
    borderColor: theme.error,
  }
});
