import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Navbar() {
  const router = useRouter();

  const menuItems = [
    { id: "time", label: "TIME", icon: "time-outline", route: "/time" },
    { id: "corrida", label: "CORRIDA", icon: "flag-outline", route: "/corrida" },
    { id: "historico", label: "HISTÓRICO", icon: "book-outline", route: "/historico" },
    { id: "memorial", label: "MEMORIAL", icon: "trophy-outline", route: "/memorial" },
  ];

  return (
    <View style={styles.navbar}>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.navItem}
          onPress={() => router.push(item.route)}
        >
          <Ionicons name={item.icon} size={20} color="#FFFFFF" />
          <Text style={styles.navLabel}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    backgroundColor: "#1A1A1A", // Preto F1
    paddingVertical: 12,
    paddingHorizontal: 8,
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#DC143C", // Vermelho F1
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 4,
  },
  navLabel: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "600",
    marginTop: 4,
    textAlign: "center",
  },
});

