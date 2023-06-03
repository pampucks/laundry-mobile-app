import { useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button } from "react-native-paper";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import WidgetBaseLogo from "../../widgets/base/WidgetBaseLogo";
import WidgetBaseLoader from "../../widgets/base/WidgetBaseLoader";

const ScreenUserLogin = ({ navigation }) => {
  const [, setIsAuthenticated] = useContext(ContextUserAuthetication);
  const [user, setUser] = useState(SchemaUser);
  const [complete, setComplete] = useState(false);

  const handleChange = (name, value) => {
    setUser((values) => ({ ...values, [name]: value }));
  };

  const userLogin = () => {
    const debounce = _.debounce(() => {
      ServiceUserLogin(user)
        .then(async (token) => {
          await ServiceBaseStoreToken(token);
          setIsAuthenticated(true);
          navigation.navigate("RouterBarang", { screen: "ScreenBarangList" });
          Alert.alert("Berhasil", "Anda berhasil login");
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);

    debounce();
  };

  useEffect(() => {
    setComplete(false);
    const debounce = _.debounce(() => {
      setComplete(true);
    }, 2000);

    debounce();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {complete && (
        <ScrollView
          contentContainerStyle={{
            gap: 16,
            marginHorizontal: 40,
            justifyContent: "center",
            flexGrow: 1,
            height: "100%",
          }}
        >
          <WidgetBaseLogo />

          <TextInput
            value={user.email || ""}
            onChangeText={(text) => handleChange("email", text)}
            label="Email"
          />
          <TextInput
            value={user.password || ""}
            onChangeText={(text) => handleChange("password", text)}
            label="Password"
            secureTextEntry={true}
          />
          <Button onPress={userLogin} mode="contained">
            Login
          </Button>
          <Button
            onPress={() => navigation.navigate("ScreenUserRegister")}
            mode="outlined"
          >
            Register
          </Button>
        </ScrollView>
      )}

      <WidgetBaseLoader complete={complete} />
    </SafeAreaView>
  );
};

export default ScreenUserLogin;
