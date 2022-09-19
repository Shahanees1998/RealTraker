import React, { useState } from "react";
import {
  View,
  Picker,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../infrastructure/theme/colors";
import icon from "../../../../assets/icon.png";

const { width, height } = Dimensions.get("window");
const Company = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState("Choose a Country");
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
        <Text style={[styles.title]}>My Company</Text>
        <Text style={[styles.hint]}>
          Enter your registered email below to receive password reset link
        </Text>
        <View style={{ marginTop: 100 }}>
          <View style={styles.container}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 320, color: colors.ui.GreyScale }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Choose a Country" value="Country" />
              <Picker.Item label="US" value="US" />
              <Picker.Item label="UK" value="UK" />
            </Picker>
          </View>
        </View>
        <View style={[styles.nextBtn, styles.blueBackground]}>
          <TouchableOpacity>
            <Text
              style={[styles.buttonText, styles.whiteText]}
              onPress={() => {
                navigation.navigate("BottomNavigator");
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{color:colors.ui.blue, marginTop:30, fontWeight:'700'}}>I haven't setup a company</Text>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#EFF0F7",
    borderRadius: 15,
    width: "100%",
    margin: 10,
  },
  nextBtn: {
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginTop: 30,
    borderWidth: 1,
  },
  blueBackground: {
    backgroundColor: colors.ui.blue,
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
    padding: 15,
    fontSize: 14,
    color: colors.ui.LightGrey,
    fontWeight: "500",
  },
});

export default Company;
