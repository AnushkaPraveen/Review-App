import React from 'react';
import {
    View,Text,StyleSheet
} from 'react-native';
import { Button } from 'react-native-paper';

const HomeScreen=({navigation})=>{
    return(
        <View>
            <Button title='See Price List' onPress={()=>navigation.navigate('Price')}/>
           <Button title='Create Review' onPress={()=>navigation.navigate('Create')}/>
            <Button title='See Reviews' onPress={()=>navigation.navigate('Review')}/>
            <View>

            </View>
            <Button style={styles.button} mode="contained" onPress={()=>navigation.navigate('Price')}>
    <Text style={styles.text}>Test</Text>
  </Button>
            
        </View>
    )
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:'#04144a',
        padding:30,
        margin:0,
    
    },
    text:{
        fontSize:20
    }
})
 export default HomeScreen;