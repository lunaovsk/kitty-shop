import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from 'react-native';
import { theme } from '../utils/theme';
import { FontAwesome } from '@expo/vector-icons';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'social';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconName?: keyof typeof FontAwesome.glyphMap;
}

export function Button({ title, variant = 'primary', icon, iconName, style, ...props }: ButtonProps) {
  
  const getContainerStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
      case 'outline':
        return styles.outline;
      case 'social':
        return styles.social;
      default:
        return styles.primary;
    }
  };

  const getTextStyle = () => {
    if (variant === 'primary') return styles.textLight;
    return styles.textDark;
  };

  return (
    <TouchableOpacity 
      style={[styles.base, getContainerStyle(), style]} 
      activeOpacity={0.8}
      {...props}
    >
      {iconName ? (
        <View style={styles.iconContainer}>
          <FontAwesome name={iconName} size={20} color={variant === 'primary' ? theme.white : theme.black} />
        </View>
      ) : icon ? (
        <View style={styles.iconContainer}>{icon}</View>
      ) : null}
      <Text style={[styles.textBase, getTextStyle()]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    padding: 16,
    borderWidth: 3,
    borderColor: theme.black,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: theme.black,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4, // for Android
  },
  primary: {
    backgroundColor: theme.accent,
  },
  secondary: {
    backgroundColor: theme.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  social: {
    backgroundColor: theme.white,
    padding: 12,
    borderWidth: 2,
    shadowOffset: { width: 3, height: 3 },
  },
  textBase: {
    fontWeight: '900',
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  textLight: {
    color: theme.white,
  },
  textDark: {
    color: theme.black,
  },
  iconContainer: {
    marginRight: 8,
  }
});
