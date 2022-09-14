import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';

export default function App() {

  let [fontLoaded] = useFonts({
    'Montserrat-Regular' : require('./assets/fonts/Montserrat-Regular.ttf'),
    'SourceSerifPro-Regular' : require('./assets/fonts/SourceSerifPro-Regular.ttf')
  })
  if (!fontLoaded)
  {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
