import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


const StackLayout = () => {
    return (
        <Tabs>
        <Tabs.Screen name="index"options={{tabBarIcon : ( { color } ) => (
            <Ionicons name='home-outline' size={24} color={color}/>
        ),
        title: 'home'
    }}/>


        </Tabs>
    );
};

export default StackLayout;