import { Text,View,Button } from "react-native";
import {Link,Stack } from "expo-router";

const homePage = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <Link href="/list/Started">Get Started/</Link>
        </View>
    );
};

export default homePage;