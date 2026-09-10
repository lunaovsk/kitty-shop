import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { validateCPF, validateEmail } from "../utils/validators";

export function useRegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const newErrors: {[key: string]: string} = {};
    const { name, email, cpf, password, confirmPassword } = formData;
    if (name.length > 0 && name.trim().length < 2) newErrors.name = "Nome deve ter no mínimo 2 caracteres.";
    if (email.length > 0 && !validateEmail(email)) newErrors.email = "Informe um e-mail válido.";
    if (cpf.length > 0 && !validateCPF(cpf)) newErrors.cpf = "Informe um CPF válido.";
    if (confirmPassword.length > 0 && confirmPassword !== password) newErrors.confirmPassword = "As senhas não coincidem.";
    setErrors(newErrors);
  }, [formData]);

  const handleRegister = () => {
    const newErrors = { ...errors };
    if (!formData.name) newErrors.name = "O nome é obrigatório.";
    if (!formData.email) newErrors.email = "O e-mail é obrigatório.";
    if (!formData.cpf) newErrors.cpf = "O CPF é obrigatório.";
    if (!formData.password) newErrors.password = "A senha é obrigatória.";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirme sua senha.";
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log("Mock register attempt with:", formData);
      router.replace("/login");
    }
  };

  return { formData, errors, handleChange, handleRegister };
}
