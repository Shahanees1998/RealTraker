import React, { useState } from "react";
import {
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Picker,
} from "react-native";
import { Text, StyleSheet, View } from "react-native";
import { AvatarImage } from "../../../assets/images/avatarimage.png";
import Icon from "react-native-vector-icons/Feather";
import { Table, Row, Rows } from "react-native-table-component";
import { colors } from "../theme/colors";
import { PieChart } from "react-native-chart-kit";
import { Avatar } from "react-native-paper";
// import { AccountCover } from "../../features/account/components/Account.styles";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import DashboardScreen from '../../features/account/screens/Dashboard';
// import Settings from '../../features/account/screens/Settings'
const { width, height } = Dimensions.get("window");

const BottomTabNavigator = () => {
  const [email, setemail] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const onChangeEmail = (e) => {
    setemail(e.target.value);
  };
  const header = ["heading 1", "heading 2", "heading 3"];
  const data = [
    ["gfg1", "gfg2", "gfg3"],
    ["gfg4", "gfg5", "gfg6"],
    ["gfg7", "gfg8", "gfg9"],
  ];
  const data1 = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  return (
    <>
      <View style={{ backgroundColor: "#F0E68C" }}>
        <View style={styles.container}>
          <Avatar.Image
            size={40}
            source={{ uri: `../../../assets/images/avatarimage.png` }}
          />
          <Text style={{ fontWeight: "700", fontSize: 18 }}>Dashboard</Text>
          <Icon name="bell" size={26} />
        </View>
        <View
          style={{
            height: 300,
            backgroundColor: "#ffffe6",
            margin: 10,
            borderRadius: 13,
          }}
        >
          <View style={[styles.input]}>
            <Icon name="search" />
            <TextInput
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email"
            />
            <View style={{ width: "100%", flex: 1, flexDirection: "row" }}>
              <View style={[styles.nextBtn, styles.blueBorder]}>
                <TouchableOpacity>
                  <Text style={[styles.buttonText, styles.blueText]}>Back</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.nextBtn, styles.blueBackground]}>
                <TouchableOpacity>
                  <Text
                    style={[styles.buttonText, styles.whiteText]}
                    onPress={() => {
                      navigation.navigate("ForgetPassword");
                    }}
                  >
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row data={header} />
          <Rows data={data} />
        </Table>
          </View>
        </View>
        <PieChart
          data={data1}
          width={width}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 50]}
          absolute
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 70,
    flexDirection: "row",
    backgroundColor: "#F0E68C",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  nextBtn: {
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    margin: 10,
    marginTop: 10,
  },
  blueBackground: {
    backgroundColor: colors.ui.blue,
  },
  blueBorder: {
    borderColor: colors.ui.blue,
  },
  blueText: {
    color: colors.ui.blue,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 25,
  },
  whiteText: {
    color: colors.ui.white,
  },
  containers: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderRadius: 15,
    margin: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderColor: colors.ui.LightGrey,
    width: "90%",
    backgroundColor: colors.ui.LightGrey,
  },
});

export default BottomTabNavigator;
