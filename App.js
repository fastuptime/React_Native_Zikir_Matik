import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, Pressable } from "react-native";
import React, { useState } from "react";

export default function App() {
  var [zikir, setZikir] = useState(0);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          margin: 20,
        }}
      >
        Zikir Sayısı: {zikir}
      </Text>

      <Pressable
        style={{ ...styles.button, backgroundColor: "red" }}
        onPress={() => {
          if (zikir < 0)
            return Alert.alert("Günah", "Zikir sayısı 0 dan küçük olamaz", [
              { text: "Tövbe et", onPress: () => setZikir(0) },
            ]);
          setZikir(zikir--);
        }}
      >
        <Text style={styles.text}>-</Text>
      </Pressable>

      <Pressable
        style={{ ...styles.button, backgroundColor: "green" }}
        onPress={() => {
          setZikir(zikir++);
        }}
      >
        <Text style={styles.text}>+</Text>
      </Pressable>

      <Pressable
        style={{ ...styles.button, backgroundColor: "blue" }}
        onPress={() => {
          setZikir(0);
        }}
      >
        <Text style={styles.text}>Sıfırla</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 20,
  },

  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
