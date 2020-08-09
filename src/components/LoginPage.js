import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { doLogInForSaga } from '../redux/actions/actionLogIn'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const LoginPage = ({ navigation }) => {

  const [textEmail, setTextEmail] = useState('')
  const [textPassword, setTextPassword] = useState('')

  const dispatch = useDispatch()

  const onChangeEmail = (text) => {
    setTextEmail(text)
  }

  const onChangePassword = (text) => {
    setTextPassword(text)
  }

  const onLogin = async () => {
    const form = { email: textEmail, password: textPassword }
    dispatch(doLogInForSaga(form, navigation))
  }

  return (
    <View style={styles.container}>

      <Input
        containerStyle={{width: '80%'}}
        label="E-mail"
        placeholder="email@adress.com"
        onChangeText={onChangeEmail}
        value={textEmail}
      />
      <Input
        containerStyle={{width: '80%'}}
        label="Password"
        placeholder="Password"
        onChangeText={onChangePassword}
        value={textPassword}
      />

      <Button
        title="To Registration"
        type="clear"
        onPress={() => navigation.navigate('Registration')}
      />
      <Button
        title="Login"
        type="clear"
        onPress={onLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  input: {
    width: '80%'
  },
});

export default LoginPage