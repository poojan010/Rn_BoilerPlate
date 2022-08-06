import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


interface ScreenProps extends NativeStackScreenProps<any> {

}

const Main: React.FC<ScreenProps> = () => {


    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                {"Hello Rn Dev \n \n Enjoy this template created by Poojan Bhatt"}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    greeting: {
        margin: 16,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 30
    }
});

export default Main;