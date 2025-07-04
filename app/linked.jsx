import {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';




const Linked = () =>{
    const [expression, setExpression] = useState('0');

    const pressKey = (input) =>{
    //function to append the number/operator selected into the input text
    setExpression(prev => {
        prev = prev || '';
        const lastChar = prev[prev.length - 1];
        if (prev === '0'){
            return input;
        }
        else if (['+', '-', 'x', '/'].includes(lastChar) && ['+', '-', 'x', '/'].includes(input)){
            return prev;
        }
        else{
            return prev+input;
        }
    });
};

const pressClear = () =>{
    //function to clear the input line when the clear button is pressed
    setExpression('0');
};

const pressBack = () => {
    // function to delete the last appended character
    setExpression(prev => {
        if (prev.length <= 1) {
            return '0';
        }
        return prev.slice(0, -1);
    });
};

const pressEnter = () =>{
    //function to evaluate expressions
    const clean  = expression.replace(/x/g, '*');
    const result = eval(clean);
    setExpression(result.toString());
}

const pressDec = () =>{
    //function to add decimals
    setExpression(prev =>{
        let i = prev.length -1;
        let check = '';
        while(i > 0 && !['+', '-', 'x', '/'].includes(prev[i])){
            check = prev[i] + check;
            i--;
        }
        if(check.includes('.')){
            return prev;
        }
        else{
            return prev + '.';
        } 
    })
}
    return (
        <View>
            <View style = {styles.inputLine}>
                <Text style = {styles.inputLine_text}>{expression}</Text>
            </View>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('+')}}>
                    <Text style = {styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('1')}}>
                    <Text style = {styles.buttonText}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('2')}}>
                    <Text style = {styles.buttonText}>2</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('3')}}>
                    <Text style = {styles.buttonText}>3</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('-')}}>
                    <Text style = {styles.buttonText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('4')}}>
                    <Text style = {styles.buttonText}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('5')}}>
                    <Text style = {styles.buttonText}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('6')}}>
                    <Text style = {styles.buttonText}>6</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('x')}}>
                    <Text style = {styles.buttonText}>X</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('7')}}>
                    <Text style = {styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('8')}}>
                    <Text style = {styles.buttonText}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('9')}}>
                    <Text style = {styles.buttonText}>9</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('/')}}>
                    <Text style = {styles.buttonText}>/</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress={()=>{pressKey('0')}}>
                    <Text style = {styles.buttonText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress={()=>{pressBack()}}>
                    <Text style = {styles.buttonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress={()=>{pressClear()}}>
                    <Text style = {styles.buttonText}>Clear</Text>
                </TouchableOpacity>

            </View>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.button} onPress={()=>{pressEnter()}}>
                    <Text style = {styles.buttonText}>=</Text>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.button} onPress={()=>{pressDec()}}>
                    <Text style = {styles.buttonText}>.</Text>
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

