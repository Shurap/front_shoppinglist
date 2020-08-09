import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationLogin from './src/components/NavigationLogin'
import ListsPage from './src/components/ListsPage'
import { createStackNavigator } from '@react-navigation/stack'
import { Header, Overlay } from 'react-native-elements'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { Button, View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import Message from './src/components/Message'
import CenterHeader from './src/components/CenterHeader'
// import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createStackNavigator()
// const Drawer = createDrawerNavigator()

const App = () => {

  return (
    <Provider store={store}>

      <Message />

      <NavigationContainer>
        {/* <Header
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => console.log('press') }}
          centerComponent={<CenterHeader />}
          rightComponent={{ icon: 'home', color: '#fff' }}
        /> */}

        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Navigation" component={NavigationLogin} />
          <Stack.Screen name="Lists" component={ListsPage} />
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
}

export default App