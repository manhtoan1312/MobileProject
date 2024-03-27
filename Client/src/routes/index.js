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
import HelpAndFeedBack from "../pages/guest/HelpAndFeedBack";
import SomeDay from "../pages/guest/SomeDay";
import Today from "../pages/guest/Today";
import Tomorror from "../pages/guest/Tomorrow";
import ThisWeek from "../pages/guest/ThisWeek";
import High from "../pages/guest/High";
import Medium from "../pages/guest/Medium";
import Low from "../pages/guest/Low";
import Next7Day from "../pages/guest/Next7Day";
import Out from "../pages/guest/Out";
import Planed from "../pages/guest/Planed";

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
    <Stack.Screen name="HelpAndFeedBack" component={HelpAndFeedBack} />
    <Stack.Screen name="SomeDay" component={SomeDay} />
    <Stack.Screen name="Today" component={Today} />
    <Stack.Screen name="Tomorror" component={Tomorror} />
    <Stack.Screen name="High" component={High} />
    <Stack.Screen name="Medium" component={Medium} />
    <Stack.Screen name="Low" component={Low} />
    <Stack.Screen name="ThisWeek" component={ThisWeek} />
    <Stack.Screen name="Next7Day" component={Next7Day} />
    <Stack.Screen name="OutOfDate" component={Out} />
    <Stack.Screen name="Planed" component={Planed} />
    <Stack.Screen name="SomeDay" component={SomeDay} />
    

  </Stack.Navigator>
);

export default Navigator;




