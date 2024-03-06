// Navigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/guest/home";
import Login from "../pages/guest/Login";
import Register from "../pages/guest/Register";
import InputOTP from "../pages/guest/InputOTP";
import RecoverAccount from "../pages/guest/RecoverAccount";
import ForgotPasswordOTP from "../pages/guest/ForgotPasswordOTP";
import ForgotPasswordEmail from "../pages/guest/ForgotPasswordEmail";
import Setting from "../pages/guest/Setting";
import Project from "../pages/guest/Project";
import AddTag from "../pages/guest/AddTag";
import AddProject from "../pages/guest/AddProject";
import AddFolder from "../pages/guest/AddFolder";
import EditTag from "../pages/guest/EditTag";
import EditFolder from "../pages/guest/EditFolder";
import EditProjectPage from "../pages/guest/EditProject";
import InforUser from "../pages/user/InforUser";
import ChangeEmail from "../pages/user/ChangeEmail";
import ChangePassword from "../pages/user/ChangePassword";

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="InputOTP" component={InputOTP} />
    <Stack.Screen name="Recover" component={RecoverAccount} />
    <Stack.Screen name="ForgotPasswordOTP" component={ForgotPasswordOTP} />
    <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail} />
    <Stack.Screen name="Setting" component={Setting} />
    <Stack.Screen name="Project" component={Project} />
    <Stack.Screen name="AddTag" component={AddTag} />
    <Stack.Screen name="AddProject" component={AddProject} />
    <Stack.Screen name="AddFolder" component={AddFolder} />
    <Stack.Screen name="EditTag" component={EditTag} />
    <Stack.Screen name="EditFolder" component={EditFolder} />
    <Stack.Screen name="EditProject" component={EditProjectPage} />
    <Stack.Screen name="Infor" component={InforUser} />
    <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
    
  </Stack.Navigator>
);

export default Navigator;




