import React from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import { useSplashScreenTimer } from "../hooks/useSplashScreenTimer";

export default function Index() {
  useSplashScreenTimer(5000);

  return <LoadingScreen />;
}
