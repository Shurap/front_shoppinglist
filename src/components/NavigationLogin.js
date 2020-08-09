import * as React from 'react'
import LoginPage from './LoginPage.js'
import RegistrationPage from './RegistrationPage.js'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const NavigationLogin = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Registration" component={RegistrationPage} />
    </Stack.Navigator>
  )
}
export default NavigationLogin