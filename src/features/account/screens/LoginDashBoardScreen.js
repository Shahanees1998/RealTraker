import React, { useState } from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Text
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from '../../../infrastructure/theme/colors'
import icon from '../../../../assets/icon.png'
import activeSign from '../../../../assets/images/activeSign.png'
const { width, height } = Dimensions.get('window');

export const LoginDashBoardScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const UserTypes = ['Admin', 'Sub Admin', 'Colaborator', 'Team Member']
  const [activeUser, setActiveUser] = useState('Admin')
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={[colors.ui.primary, colors.ui.Secondary]} style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

        <Image
          source={icon}
          style={{ height: 60.71, width, resizeMode: 'contain' }}
        />
        <Text style={styles.title}>I am a/an</Text>
        <View style={styles.body}>

          <FlatList
            data={UserTypes}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => {
              return (

                <View style={activeUser == item ? { ...styles.usersContainer, backgroundColor: colors.ui.Secondary } : styles.usersContainer}>
                  <TouchableOpacity
                    onPress={() => setActiveUser(item)}
                  >
                    {activeUser != item ?
                      <View style={styles.usersContainerBlur}>

                      </View> :
                      <Image
                        source={activeSign}
                        style={styles.usersContainerBlur}
                      />


                    }
                    <Text style={styles.usersContainerBlurText}>{item}</Text>
                  </TouchableOpacity>

                </View>


              )
            }}
          />
        </View>
        <View style={[styles.nextBtn,styles.blueBackground]}>
          <TouchableOpacity>
          <Text style={[styles.buttonText, styles.whiteText]}>     
                   Continue
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.nextBtn, styles.blueBorder]}>
          <TouchableOpacity

          >
            <Text style={[styles.buttonText, styles.blueText]}>
              I'm new here
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
    borderWidth:1
  },
  blueBackground: {
    backgroundColor: colors.ui.blue,
  },
  blueBorder: {
    borderColor: colors.ui.blue,
  },
  blueText: {
    color: colors.ui.blue,
  }
  ,
  buttonText : {
    fontWeight: '600',fontSize: 15, lineHeight: 25 
  },
  whiteText: {
    color: colors.ui.white
  },
  usersContainer: {
    width: 156,
    height: 130,
    borderRadius: 32,
    backgroundColor: colors.ui.boxWhite,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2
  },
  usersContainerBlur: {
    height: 32,
    width: 32,
    backgroundColor: colors.ui.grey,
    borderRadius: 32,
    alignSelf: 'center',
    marginBottom: 10
  },
  title: {
    color: colors.ui.GrayscaleBlack,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 24,
    marginTop: 50,
    textAlign: 'center',
    fontFamily: 'SourceSerifPro-Regular'
  },
  usersContainerBlurText: {
    color: colors.ui.LightGrey
  },
  body: {
    width: '100%',
    marginVertical:30,

  }

});