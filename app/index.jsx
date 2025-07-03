import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const Home = () =>{
    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Welcome to my calculator app!</Text>

            <Link href={"/linked"} style = {styles.link}>To the Calculator</Link>
        </View>

        
    );
};

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },

    link: {
        marginTop: 30,
        textDecorationLine: 'underline'
    }
})