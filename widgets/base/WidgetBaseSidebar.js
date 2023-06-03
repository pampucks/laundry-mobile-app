import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { Divider, useTheme } from "react-native-paper";

const WidgetBaseSidebar = (props) => {
  const imageProfile = require("../../assets/drawer.png");
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image
        source={imageProfile}
        style={{
          backgroundColor: theme.colors.tertiary,
          resizeMode: "center",
          width: "100%",
          height: "30%",
          alignSelf: "center",
          padding: 10,
        }}
      />
      <Text style={styles.title}>ONE LAUNDRY</Text>
      <Divider />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Divider />
      <Text
        style={{
          fontSize: 10,
          textAlign: "center",
          color: "grey",
          paddingVertical: 16,
        }}
      >
        Kelompok 3 © {new Date().getFullYear()}
      </Text>
    </SafeAreaView>
  );
};

export default WidgetBaseSidebar;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginTop: 0,
  },
  imageProfile: {
    resizeMode: "center",
    width: "100%",
    height: "30%",
    alignSelf: "center",
    // borderRadius: 100,
    padding: 10,
    // backgroundColor: theme,
  },
  title: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 16,
  },
});
