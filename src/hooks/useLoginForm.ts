import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { validateEmail } from "../utils/validators";

export function useLoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (formData.email.length > 0 && !validateEmail(formData.email)) {
      setError("E-mail com formato inválido.");
    } else {
      setError("");
    }
  }, [formData.email]);

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      setError("Preencha e-mail e senha para entrar.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("E-mail com formato inválido.");
      return;
    }
    console.log("Mock login attempt with:", formData);
    router.replace("/home");
  };

  const navigateTo = (path: any) => {
    router.replace(path);
  };

  return { formData, error, handleChange, handleLogin, navigateTo };
}
