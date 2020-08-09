import * as React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native'
import SingleItem from './SingleItem'
import { useDispatch } from 'react-redux'
import { addPageTitleToStore } from '../redux/actions/actionApp'
import { useFocusEffect } from '@react-navigation/native'
import { DrawerActions } from '@react-navigation/native'
import NewListElement from './NewListElement'
import ToDoList from './ToDoList'
import FinishedList from './FinishedList'

const ListTab = (props) => {

  const dispatch = useDispatch()

  useFocusEffect(
    React.useCallback(() => {
      dispatch(addPageTitleToStore(props.route.params.title))
    }, [props.route.params.title])
  )

  const arrayItems = props.route.params.list.map((element) => {
    return (
      <View key={element._id}>
        <SingleItem
          listId={props.route.params.id}
          id={element._id}
          note={element.note}
          count={element.count}
          completed={element.completed}
        />
      </View>
    )
  })

  return (
    <View style={styles.container}>
      <View style={{ ...styles.header, backgroundColor: props.route.params.color }} >
        <Button
          type="clear"
          onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
          icon={
            //TODO Change to <Icon />
            <MaterialIcons name="menu" size={24} color='white' />
          }
        />
        <View style={styles.wrapperText}>
          <Text style={styles.text}>{props.route.params.title}</Text>
        </View>
      </View>

      <NewListElement />
      <ToDoList />
      <FinishedList />

      <Text h1>Title: {props.route.params.title}</Text>

      {arrayItems}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  header: {
    flexDirection: 'row',
    margin: 5,
    // backgroundColor: 'green',
    height: 50,
    // width: '100%',
    alignItems: 'center',
    // justifyContent: 'flex-start',

  },
  text: {
    color: 'white',
  },
  wrapperText: {
    flex: 1,
    // borderWidth: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'

  }
});

export default ListTab
