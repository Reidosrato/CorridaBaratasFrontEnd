import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function BarataCard({ barata }) {
  const estaMorta = barata.vidaAtual === 0;
  const porcentagemVida = barata.vidaMaxima > 0 
    ? (barata.vidaAtual / barata.vidaMaxima) * 100 
    : 0;

  return (
    <View style={styles.card}>
      {/* Ícone da Barata ou Morte */}
      <View style={styles.barataIconContainer}>
        <Image
          source={estaMorta 
            ? require("../../assets/morteicon.png")
            : require("../../assets/barataicon.png")
          }
          style={styles.barataIcon}
          resizeMode="contain"
        />
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Nome:</Text>
          <Text style={styles.statValue}>{barata.nome}</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Nacionalidade:</Text>
          <Text style={styles.statValue}>{barata.nacionalidade}</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Vida:</Text>
          <View style={styles.vidaContainer}>
            <View style={styles.vidaBarContainer}>
              <View
                style={[
                  styles.vidaBar,
                  {
                    width: `${porcentagemVida}%`,
                    backgroundColor: porcentagemVida > 50 ? "#00FF00" : porcentagemVida > 25 ? "#FFA500" : "#FF0000",
                  },
                ]}
              />
            </View>
            <Text style={styles.vidaText}>
              {barata.vidaAtual}/{barata.vidaMaxima}
            </Text>
          </View>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Vitórias:</Text>
          <Text style={[styles.statValue, styles.vitoriasText]}>
            🏆 {barata.vitorias}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    margin: 4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    width: "48%",
    minHeight: 200,
  },
  barataIconContainer: {
    width: 80,
    height: 80,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  barataIcon: {
    width: 80,
    height: 80,
  },
  statsContainer: {
    width: "100%",
    marginTop: 8,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
    paddingHorizontal: 4,
  },
  statLabel: {
    fontSize: 11,
    color: "#666",
    fontWeight: "600",
    flex: 1,
  },
  statValue: {
    fontSize: 11,
    color: "#1A1A1A",
    fontWeight: "700",
    flex: 1,
    textAlign: "right",
  },
  vidaContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  vidaBarContainer: {
    flex: 1,
    height: 16,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 8,
  },
  vidaBar: {
    height: "100%",
    borderRadius: 8,
  },
  vidaText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1A1A1A",
    minWidth: 35,
  },
  vitoriasText: {
    color: "#FFD700",
  },
});

