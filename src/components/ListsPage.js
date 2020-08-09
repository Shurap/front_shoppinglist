import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import List from './List'
import { useSelector } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons';
import NewListTab from './NewListTab'
import Icon from 'react-native-vector-icons/MaterialIcons'


const Tab = createMaterialTopTabNavigator()

const ListsPage = ({ }) => {
  //TODO Delete mocks and create clear list in registration

  const mockList = { title: 'Clear list', list: [], id: '1' }

  const lists = useSelector((state) => state.lists.lists)
  if (lists.length === 0) lists.push(mockList)

  const arrayLists = lists.map((element, index) => {
    if (element.title === '') element.title = '---'
    return (
      <Tab.Screen
        key={element.id}
        name={element.title}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={element.icon} size={24} color={element.color} />)
        }}
      >
        {() => (
          <List
            id={element.id}
            title={element.title}
            list={element.list}
            color={element.color}
          />
        )}
      </Tab.Screen>
    )
  })

  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        style: {
          height: 70,
          // flex: 1,
          // alignItems: 'center',
          justifyContent: 'flex-end'
        }
      }}
    >

      {arrayLists}

      <Tab.Screen
        name="NewListTab"
        component={NewListTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" size={24} color="black" />
          )
        }}
      />

    </Tab.Navigator>
  );
}

export default ListsPage