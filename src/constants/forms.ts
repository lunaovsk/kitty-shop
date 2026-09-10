export const REGISTER_FIELDS = [
  { name: "name", label: "Nome completo", placeholder: "Seu nome" },
  { name: "email", label: "E-mail", placeholder: "Seu e-mail", keyboardType: "email-address", autoCapitalize: "none" },
  { name: "cpf", label: "CPF", placeholder: "000.000.000-00", keyboardType: "numeric" },
  { name: "password", label: "Senha", placeholder: "Sua senha", secureTextEntry: true },
  { name: "confirmPassword", label: "Repetir senha", placeholder: "Confirme a senha", secureTextEntry: true },
] as const;

export const LOGIN_FIELDS = [
  { name: "email", label: "E-mail", placeholder: "Digite seu e-mail", keyboardType: "email-address", autoCapitalize: "none" },
  { name: "password", label: "Senha", placeholder: "Digite sua senha", secureTextEntry: true },
] as const;
