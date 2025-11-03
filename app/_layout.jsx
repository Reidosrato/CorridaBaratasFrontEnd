import { Stack } from "expo-router";
import { BaratasProvider } from "../context/BaratasContext";

export default function Layout() {
  return (
    <BaratasProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </BaratasProvider>
  );
}

