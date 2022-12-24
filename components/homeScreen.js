import React from 'react';
import {
    View,Text,Button
} from 'react-native';

const HomeScreen=({navigation})=>{
    return(
        <View>
            <Button title='See Price List' onPress={()=>navigation.navigate('Price')}/>
           <Button title='Create Review' onPress={()=>navigation.navigate('Create')}/>
            <Button title='See Reviews' onPress={()=>navigation.navigate('Review')}/>
            
        </View>
    )
}
 export default HomeScreen;