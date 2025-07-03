import { Slot, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const RootLayout = ()=>{
    return (
        <View  style = {{flex: 1}}>
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: '#eee'
                }
                
            }}>
                <Stack.Screen name = "index" options={{title: 'Home'}}></Stack.Screen>
                <Stack.Screen name = "linked" options={{title: 'Calculator'}}></Stack.Screen>
            </Stack>
        </View>
    )
}

export default RootLayout

const styles = StyleSheet.create({})