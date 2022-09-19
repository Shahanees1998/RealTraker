import React, { useState } from "react";
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../infrastructure/theme/colors";
import icon from "../../../../assets/icon.png";
import loading from "../../../../assets/icons/loading.png";

const { width, height } = Dimensions.get("window");

const ForgetPassword = ({navigation}) => {
  const [email, setemail] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const onChangeEmail = (e) => {
    setemail(e.target.value);
  };
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
        <Text style={[styles.title]}>Forget Password</Text>
        <Text style={[styles.hint]}>
          Enter your registered email below to receive password reset link
        </Text>
        <View style={[styles.container]}>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
            style={styles.input}
          />
        </View>
        <View style={[styles.nextBtn, styles.blueBackground]}>
          {!isLoading === true ? (
            <TouchableOpacity>
              <Text
                style={[styles.buttonText, styles.whiteText]}
                onPress={() => {
                  navigation.navigate("AdminLogin");
                }}
              >
                Send
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={()=>{navigation.navigate('Company')}}>
              <Image source={loading} />
            </TouchableOpacity>
          )}
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
    borderWidth: 1,
  },
  blueBackground: {
    backgroundColor: colors.ui.blue,
  },
  container: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 25,
  },
  whiteText: {
    color: colors.ui.white,
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
  hint: {
    padding: 10,
    fontSize: 16,
    color: colors.ui.LightGrey,
    fontWeight: "500",
  },
  input: {
    borderRadius: 15,
    margin: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderColor: colors.ui.GreyScale,
    width: "90%",
    backgroundColor: "#EFF0F7",
  },
});

export default ForgetPassword;
