import { useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import { ContextUserAuthetication } from "../contexts/ContextUser";
import { ServiceBaseGetToken } from "../services/ServiceBase";

export const useHookUserAuthenticationInterface = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    setTimeout(async () => {
      const token = await ServiceBaseGetToken();
      setIsAuthenticated(token ? true : false);
    }, 1000);
  }, []);

  return [isAuthenticated, setIsAuthenticated];
};

export const useHookUserAuthenticationRedirect = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [isAuthenticated] = useContext(ContextUserAuthetication);

  useEffect(() => {
    if (isFocused) {
      if (!isAuthenticated) {
        navigation.navigate("RouterUser", { screen: "ScreenUserLogin" });
      }
    }
  }, [isAuthenticated]);
};
