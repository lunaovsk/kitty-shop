import { useEffect } from "react";
import { useRouter } from "expo-router";

export function useSplashScreenTimer(timeoutMs: number = 5000) {
  const router = useRouter();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, timeoutMs);
    
    return () => clearTimeout(timer);
  }, [router, timeoutMs]);
}
