import React from 'react';
import {Image} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Books from '../Pages/Books'
import Settings from '../Pages/Settings'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontwaesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Library from '../Pages/Library';

const Tab = createBottomTabNavigator();


export default function Routes(){
  return(
 
      <Tab.Navigator
      screenOptions={{
          // headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarIconStyle:{
           
          },
          
          tabBarStyle:{
            backgroundColor: '#0063b3',
            borderTopWidth: 0,
            
            height: 60
          }
      }}
      >
            <Tab.Screen
           name='Library'
           component={Library}
           options={{
             // tabBarLabel: 'Euuuu'
               headerShown: false,
             tabBarIcon: ({color, size}) =>{
                 return <Material name='bookmark-check' color={color} size={35}></Material>
             }
           }}>
           </Tab.Screen> 

        <Tab.Screen
        name='Books'
        component={Books}
        options={{
           tabBarLabel: 'Euuuu',
           headerShown: false,
           headerStyle:{
            backgroundColor: '#1e555c'
           },
           headerTitleAlign: 'left',
           headerTitleStyle:{
            // fontFamily: 'Catamaran-ExtraBold',
             fontSize: 25,
             color: 'white'
            
           },
          tabBarIcon: ({color, size}) =>{
            
              // return <Fontwaesome name='book' color={color} size={35}></Fontwaesome>
              // return <Image source={require('../Img/book.svg')}></Image>
              return <Feather name='book' color={color} size={35}></Feather>
          }
        }}>
        </Tab.Screen>

         <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          // tabBarLabel: 'Euuuu'
            headerShown: false,
          tabBarIcon: ({color, size}) =>{
              return <Feather name='menu' color={color} size={35}></Feather>
          }
        }}>
        </Tab.Screen> 



       

      </Tab.Navigator>
  
  )
}