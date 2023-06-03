import { StyleSheet, View, Image, Platform } from "react-native";
import { MD2Colors, Text } from "react-native-paper";

const WidgetBaseLogo = () => {
  const url = require("../../assets/adaptive-icon4.png");
  return (
    <View style={styles.container}>
      <Image source={url} styles={styles.image} />
      <Text variant="titleMedium">ONE LAUNDRY</Text>
    </View>
  );
};

export default WidgetBaseLogo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    resizeMode: "center",
    width: 160,
    height: 160,
    alignSelf: "center",
    marginBottom: 30,
    borderRadius: 48,
    backgroundColor: MD2Colors.green400,
  },
});
