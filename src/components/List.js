import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ListTab from './ListTab'
import DeleteList from './DeleteList'
// import NewListTab from './NewListTab'

const Drawer = createDrawerNavigator()

const List = (props) => {


  return (
    <Drawer.Navigator>

      <Drawer.Screen
        name="List"
        component={ListTab}
        initialParams={
          {
            id: props.id,
            title: props.title,
            list: props.list,
            color: props.color,
          }
        }
      />

      <Drawer.Screen
        name="DeleteList"
        component={DeleteList}
        initialParams={
          {
            id: props.id,
            title: props.title,
            color: props.color,
          }
        }
      />

    </Drawer.Navigator>
  )
}

export default List