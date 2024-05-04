import { createDrawerNavigator } from "@react-navigation/drawer"
import {Home} from "../components/Home"
import Login from "../components/Login"
import Perfil from "../components/Perfil"


const { Navigator, Screen } = createDrawerNavigator()

export default function Drawer() {
    return(
        <Navigator>
            <Screen name="home" component={Home}/>
            <Screen name="login" component={Login}/>
            <Screen name="perfil" component={Perfil}/>
        </Navigator>
    )
}