import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { Image, Scale, Tag, Star, Percent } from "lucide-react-native";
import { MOCK_PRODUCTS, Product } from "../services/mocks";

function ProductCard({ product }: { product: Product }) {
  return (
    <View style={{ marginBottom: 20 }}>
      {/* Imagem */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image size={24} color="black" />
        <Text style={{ marginLeft: 8 }}>{product.imagePlaceholder}</Text>
      </View>

      {/* Span 1: Peso (se tiver) */}
      {product.weight && (
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
          <Scale size={16} color="gray" />
          <Text style={{ marginLeft: 4 }}>{product.weight}</Text>
        </View>
      )}

      {/* Span 2: Tag de Promoção (se for promo) */}
      {product.isPromo && (
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
          <Tag size={16} color="red" />
          <Text style={{ marginLeft: 4, color: "red" }}>PROMOÇÃO</Text>
        </View>
      )}

      {/* Título */}
      <Text style={{ marginTop: 8, fontWeight: "bold" }}>{product.name}</Text>

      {/* Descrição Reduzida */}
      <Text>{product.description}</Text>

      {/* Número de vendidos */}
      <Text>{product.soldCount} vendidos</Text>

      {/* Estrelas */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
        <Star size={16} color="gold" fill="gold" />
        <Text style={{ marginLeft: 4 }}>{product.stars}</Text>
      </View>

      {/* Preço */}
      <Text style={{ marginTop: 4, fontWeight: "bold" }}>R$ {product.price.toFixed(2)}</Text>

      {/* Span 3: Porcentagem de desconto */}
      {product.isPromo && product.discountPercentage && (
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
          <Percent size={16} color="green" />
          <Text style={{ marginLeft: 4, color: "green" }}>{product.discountPercentage}% OFF</Text>
        </View>
      )}

      <Button title="Comprar" onPress={() => console.log("Comprado:", product.name)} />
    </View>
  );
}

export function ProductList() {
  return (
    <FlatList
      data={MOCK_PRODUCTS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
}
