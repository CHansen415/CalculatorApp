import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Link } from 'expo-router'

const Linked = () =>{
    return (
        <View>
            <View style = {styles.inputLine}>
                <Text style = {styles.inputLine_text}>Input Text Goes here</Text>
            </View>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>2</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>3</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>6</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>X</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>9</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>/</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>Clear</Text>
                </TouchableOpacity>
            </View>
           
            <Link href = '/' style = {styles.link}>
                <Text>Home Page</Text>
            </Link>
            
        </View>
    );
};

export default Linked


const styles = StyleSheet.create({
    link: {
        marginTop: 30,
        textDecorationLine: 'underline',
    },

    button: {
        borderColor: 'black',
        borderWidth: 2,
        width: '25%',
        height: 100,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 20
    },

    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    inputLine: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 20,
        paddingTop: 30,
    },
    inputLine_text: {
        fontSize: 30
    }
});


const pressNumber = () =>{
    //function to append the number selected into the input text
};

const pressClear = () =>{
    //function to clear the input line when the clear button is pressed
};

const pressBack = () => {
    // function to delete the last appended character 
};