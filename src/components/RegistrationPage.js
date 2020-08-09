import * as React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpForSaga } from '../redux/actions/actionSignUp'

const RegistrationPage = ({ navigation }) => {

  const dispatch = useDispatch()

  const [textName, setTextName] = useState('')
  const [textEmail, setTextEmail] = useState('')
  const [textPassword, setTextPassword] = useState('')

  const onChangeName = (text) => {
    setTextName(text)
  }

  const onChangeEmail = (text) => {
    setTextEmail(text)
  }

  const onChangePassword = (text) => {
    setTextPassword(text)
  }

  const onSignUp = async () => {
    const form = { nick: textName, email: textEmail, password: textPassword }
    dispatch(signUpForSaga(form, navigation))
  }

  return (
    <View style={styles.container}>

      <Input
        containerStyle={{width: '80%'}}
        label="Name"
        placeholder="Your name"
        onChangeText={onChangeName}
        value={textName}
      />
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
        title="To Login"
        type="clear"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="SignUp"
        type="clear"
        onPress={onSignUp}
      />
    </View>
  )
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

export default RegistrationPage




{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Registration page</Text>
<Button
  title="to Login"
  onPress={() => navigation.navigate('Login')}
/>
</View> */}