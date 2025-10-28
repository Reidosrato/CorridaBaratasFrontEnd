import { Stack } from "expo-router";
import { EstoqueProvider } from "../context/BaratasContext";

export default function Layout() {
  return (
    <EstoqueProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </EstoqueProvider>
  );
}
