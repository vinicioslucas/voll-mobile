import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Consultas from "./Consultas";
import React, { Component } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Explorar from "./Explorar";
import Perfil from "./Perfil";


const Tab = createBottomTabNavigator();
const screenOptions = {
        tabBarStyle: {
            backgroundColor:"#002851"
        },
        tabBarActiveTintColor: "#339cff",
        tabBarInactiveTintColor: "#fff"
}

const tabs = [
    {
        id: 1,
        name: 'Início',
        component: Home,
        icon: 'home'
    },
    {
        id: 2,
        name: 'Consultas',
        component: Consultas,
        icon: 'calendar'
    },
    {
        id: 3,
        name: 'Explorar',
        component: Explorar,
        icon: 'search'
    },
    {
        id: 4,
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    }
]

export default function Tabs(){
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            {tabs.map((tab) => (
                <Tab.Screen 
                key={tab.id} 
                name={tab.name} 
                component={tab.component} 
                options={{headerShown: false, tabBarIcon: ({color, size}) => (<Ionicons name={tab.icon} color={color} size={size} />)}}/>) )}
        </Tab.Navigator>
    )
}