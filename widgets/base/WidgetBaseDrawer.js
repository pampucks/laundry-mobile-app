import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import WidgetBaseSidebar from "./WidgetBaseSidebar";

import { useHookUserAuthenticationInterface } from "../../hooks/HookUser";
import { useHookBaseRefresh } from "../../hooks/HookBase";

import { ContextBaseRefresh } from "../../contexts/ContextBase";
import { ContextUserAuthetication } from "../../contexts/ContextUser";

import { RouterBarangAutenticated } from "../../routes/RouterBarang";
import {
  RouterUserAuthenticated,
  RouterUserNotAuthenticated,
} from "../../routes/RouterUser";

const Drawer = createDrawerNavigator();

const WidgetBaseDrawer = () => {
  const [isAuthenticated, setIsAuthenticated] =
    useHookUserAuthenticationInterface();
  const { isRefresh, startRefresh, stopRefresh } = useHookBaseRefresh();
  const [dataContoh] = useState("lorem ipsum");

  return (
    <ContextBaseRefresh.Provider
      value={{ isRefresh, startRefresh, stopRefresh }}
    >
      <ContextUserAuthetication.Provider
        value={[isAuthenticated, setIsAuthenticated, dataContoh]}
      >
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <WidgetBaseSidebar {...props} />}
          >
            {isAuthenticated && (
              <>
                <Drawer.Screen
                  options={{ drawerLabel: "Barang", title: "Barang" }}
                  name="RouterBarang"
                  component={RouterBarangAutenticated}
                />

                <Drawer.Screen
                  options={{
                    drawerLabel: "Pengaturan",
                    title: "Pengaturan",
                  }}
                  name="RouterUserAuthenticated"
                  component={RouterUserAuthenticated}
                />
              </>
            )}

            {!isAuthenticated && (
              <>
                <Drawer.Screen
                  options={{ drawerLabel: "Login", title: "User" }}
                  name="RouterUser"
                  component={RouterUserNotAuthenticated}
                />
              </>
            )}
          </Drawer.Navigator>
        </NavigationContainer>
      </ContextUserAuthetication.Provider>
    </ContextBaseRefresh.Provider>
  );
};

export default WidgetBaseDrawer;
