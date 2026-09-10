import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "../components/Header";
import { Filters } from "../components/Filters";
import { ProductList } from "../components/Products";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Filters />
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
