import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBaratas } from "../context/BaratasContext";
import BarataCard from "./components/BarataCard";
import Navbar from "./components/Navbar";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const { baratas } = useBaratas();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Navbar />

      {/* Grid de Baratas */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.baratasGrid}>
          {baratas.map((barata) => (
            <BarataCard key={barata.id} barata={barata} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Fundo claro F1
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 8,
  },
  baratasGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
});
