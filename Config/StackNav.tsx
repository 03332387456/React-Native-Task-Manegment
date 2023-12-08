import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Screens/Signup';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Products from '../Screens/Product';
import SingleProduct from '../Screens/SingleProduct';
import Task from '../Screens/Task';
import CreateTask from '../Screens/CreateTask';
import MyTasks from '../Screens/Task';
import SingleTask from '../Screens/SingleTask';
import Profile from '../Screens/Profile';
import ApiRoutes from '../Screens/ApiRoutes';
import BackendLogin from '../Screens/BackendLogin';
import BackendSignup from '../Screens/BackendSignup';



const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Backend Signup" component={BackendSignup} />
        <Stack.Screen name="Backend Login" component={BackendLogin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ApiRoutes" component={ApiRoutes} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Your Profile" component={Profile} />
        <Stack.Screen name="CreateTask" component={CreateTask} />
        <Stack.Screen name="MyTasks" component={MyTasks} />
        <Stack.Screen name="Single Task" component={SingleTask} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;