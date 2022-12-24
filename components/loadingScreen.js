import React from 'react';
import {
    View,Text,Button,StyleSheet
} from 'react-native';

const LoadingScreen=({ navigation })=>{
    return(
        <View style={styles.container}>
            <Text>
                Canteen Review 
            </Text>
            <Button title='Go to Home' onPress={()=>navigation.navigate('HomeScreen')}/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})
 export default LoadingScreen;