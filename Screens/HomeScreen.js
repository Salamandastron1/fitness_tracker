import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Fitness Tracker App</Text>
            <View style={styles.buttonMenu}>
                <Button 
                    title="Deadlift" 
                    onPress={navigation.navigate("DeadLift")}
                />
                <Button 
                    title="Squat" 
                    onPress={navigation.navigate("Squat")}
                />
                <Button 
                    title="Bench Press" 
                    onPress={navigation.navigate("Bench Press")}
                />
                <Button 
                    title="Shoulder Press" 
                    onPress={navigation.navigate("Shoulder Press")}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 20
    },
    buttonMenu: {
        flex: .5,
        justifyContent: "space-evenly"
    }
});
