import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from '../../infrastructure/theme/colors'
import image1 from '../../../assets/images/image1.png'
import image2 from '../../../assets/images/image2.png'
import image3 from '../../../assets/images/image3.png'
import image4 from '../../../assets/images/image4.png'

import icon from '../../../assets/icon.png'

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#282534', white: '#fff' };

const slides = [
  {
    id: '1',
    image: image1,
    title: 'Perfectly Designed',
    subtitle: 'The only contstuction management software you need',
  },
  {
    id: '2',
    image: image2,
    title: 'Perfectly Designed',
    subtitle: 'The only contstuction management software you need',
  },
  {
    id: '3',
    image: image3,
    title: 'Perfectly Designed',
    subtitle: 'The only contstuction management software you need',
  },
  {
    id: '4',
    image: image4,
    title: 'Perfectly Designed',
    subtitle: 'The only contstuction management software you need',
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={icon}
        style={{ height: 60.71, width, resizeMode: 'contain' }}
      />
      <Image
        source={item?.image}
        style={{ height: 230, marginTop: 50, width, resizeMode: 'contain' }}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};


const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: colors.ui.blue,
                  width: 16,
                  height: 8,
                  borderRadius: 4
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.nextBtn}
                onPress={() => navigation.replace('LoginDashBoard')}>
                <Text style={{ fontWeight: '600', color: colors.ui.white, fontSize: 15, lineHeight: 25 }}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: colors.ui.blue,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: colors.ui.blue,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.nextBtn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.ui.white,
                    fontSize: 15,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.ui.primary }}>
      <LinearGradient colors={[colors.ui.primary, colors.ui.Secondary]} style={{ flex: 1 }}>

        <StatusBar backgroundColor={colors.ui.primary} />
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{ height: height * 0.75 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({ item }) => <Slide item={item} />}
        />
        <Footer />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  subtitle: {
    color: colors.ui.LigtGrey,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
    fontFamily: 'Montserrat-Regular'

  },
  title: {
    color: colors.ui.GreyScale,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
    fontFamily: 'SourceSerifPro-Regular'

  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 8,
    width: 8,
    backgroundColor: colors.ui.LightGrey,
    marginHorizontal: 3,
    borderRadius: 4,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBtn: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.ui.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
export default OnboardingScreen;
