import {View, Text, Image, StyleSheetr} from "react-native";
import { Button } from "react-native-paper";
export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button mode="contained" onPress={()=>navigation.navigate("Login")}>
                Login
            </Button>
        </View>
    );
}