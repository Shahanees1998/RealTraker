import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../infrastructure/theme/colors";
import icon from "../../../../assets/icon.png";
import image from "../../../../assets/images/adminlogin.png";
import Microsoft from "../../../../assets/images/microsoft.png";
import Google from "../../../../assets/images/google.png";

const { width, height } = Dimensions.get("window");
const AdminLogin = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[colors.ui.primary, colors.ui.Secondary]}
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      >
        <Image
          source={icon}
          style={{ height: 60.71, width, resizeMode: "contain" }}
        />
        <Image source={image} style={{ marginTop: 20, marginBottom:20 }} />
        <View style={[styles.nextBtn, styles.blueBackground]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text style={[styles.buttonText, styles.whiteText]}>
              Continue With Email
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.nextBtn, styles.whiteBackground]}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
          >
            <Image source={Microsoft} style={{ margin: 10 }} />
            <Text style={[styles.buttonText, styles.blueText]}>
              Continue With Microsoft
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.nextBtn, styles.whiteBackground]}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
          >
            <Image source={Google} style={{ margin: 10 }} />
            <Text style={[styles.buttonText, styles.blueText]}>
              Continue With Google
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  nextBtn: {
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginTop: 10,
  },
  blueBackground: {
    backgroundColor: colors.ui.blue,
  },
  whiteBackground: {
    backgroundColor: colors.ui.white,
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
  usersContainer: {
    width: 156,
    height: 130,
    borderRadius: 32,
    backgroundColor: colors.ui.boxWhite,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  usersContainerBlur: {
    height: 32,
    width: 32,
    backgroundColor: colors.ui.grey,
    borderRadius: 32,
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    color: colors.ui.GrayscaleBlack,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 24,
    marginTop: 50,
    textAlign: "center",
    fontFamily: "SourceSerifPro-Regular",
  },
  usersContainerBlurText: {
    color: colors.ui.LightGrey,
  },
  body: {
    width: "100%",
    marginVertical: 30,
  },
});

export default AdminLogin;
