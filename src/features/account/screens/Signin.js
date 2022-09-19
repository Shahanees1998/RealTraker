import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../infrastructure/theme/colors";
import icon from "../../../../assets/icon.png";

const { width, height } = Dimensions.get("window");

const Signin = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, seterror] = useState(true);
  const [success, setsuccess] = useState(true)
  const [onfocus, setonfocus] = useState(true);
  const onChangeEmail = (e) => {
    setemail(e.target.value);
    alert(email);
  };
  const onChangePassword = (e) => {
    setemail(e.target.value);
    alert(email);
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
        <View style={[styles.container]}>
          <Text style={[styles.title]}>Sign in</Text>
          <Text style={[styles.hint]}>
            Enter your registered email below to receive password reset link
          </Text>
          {success ==true ?
          <View style={styles.success}>
            <TextInput
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email"
            />
          </View>:
          <View style={styles.input}>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
          />
        </View>}

          {error == false ? (
            <View style={styles.input}>
              <TextInput
                onChangeText={onChangePassword}
                value={Password}
                placeholder="Password"
                
              />
            </View>
          ) : (
            <>
            <View style={styles.error}>
              <TextInput
                onChangeText={onChangePassword}
                value={Password}
                placeholder="Password"
              />
            </View>
            </>
          )}
            <Text style={{width:'100%',textAlign:'right',paddingRight:10,color:'red'}}>Forget Password</Text>
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
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
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
  title: {
    color: colors.ui.GrayscaleBlack,
    fontSize: 20,
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
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderColor: colors.ui.GreyScale,
    width: "100%",
    backgroundColor: "#EFF0F7",
  },
  error:{
    borderRadius: 15,
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: colors.ui.error,
    width: "100%",
    backgroundColor: colors.bg.error,
  },
  success:{
    borderRadius: 15,
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: colors.ui.success,
    width: "100%",
    backgroundColor: colors.bg.success,
  }

});
export default Signin;
