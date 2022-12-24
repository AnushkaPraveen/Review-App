import React from 'react';
import {
    View,Text,Button,StyleSheet,Image,
} from 'react-native';

const LoadingScreen=({ navigation })=>{
    setTimeout(() => {
        navigation.navigate('HomeScreen');
        }, 4000);
    return(
        <View style={styles.container}>
           
            <Image
        style={styles.stretch}
        source={require('./images/loading.jpg')}
      />
       <Text style={styles.title}>
                Canteen Review 
            </Text>
            {/* <Button title='Go to Home' onPress={()=>navigation.navigate('HomeScreen')}/> */}
            <View style={styles.footer}>
                <Text>
                    Powered by ITFSU
                </Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#04144a'
    },
    footer:{
        flex:1,
        justifyContent:'flex-end',
        color:'#090937'
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        color:'#090937'
    }
})
 export default LoadingScreen;