import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const PriceScreen = () => {
  const [priceData, setPrice] = useState([]);
  const [allSeriesData, setAllSeriesData] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Goda Canteen', value: 'Goda'},
    {label: 'Goda Uda Canteen', value: 'GodaUda'},
    {label: 'Wala Canteen', value: 'Wala'},
    {label: 'L Canteen', value: 'L'},
    {label: 'Staff Canteen', value: 'staff'},
    {label: 'Civil Canteen', value: 'civil1'},
    {label: 'Civil Canteen 2', value: 'civil2'},
  ]);

  /* const DataAPI = async () => {
        try {
            
          let data = await fetch(
            "https://sheets.googleapis.com/v4/spreadsheets/1sqvThauV2Dd8RbX3FcWg2PTw0nTk1Cv4G9_g2hQcM74/values/sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyAhJtZdImbIMRtDzHWRFBXx3cVEjg4qzME"
          );
          
          let { values } = await data.json();
          let [, ...Data] = values.map((data) => data);
          setPrice(Data);
          console.log(Data);
          
        } catch {
          console.log("Error");
        }
      } */
  const DataAPI = async () => {
    const SHEET_ID = '1sqvThauV2Dd8RbX3FcWg2PTw0nTk1Cv4G9_g2hQcM74';
    const SHEET_NAME = value;
    const API_KEY = 'AIzaSyAhJtZdImbIMRtDzHWRFBXx3cVEjg4qzME';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`;
    axios
      .get(url)
      .then(function (response) {
        // handle success
        formatResponse(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        //onError(error);
      })
      .finally(function () {
        // always executed
        console.log('ALL DONE LOADING DATA');
      });
  };
  function formatResponse(response) {
    const keys = response.values[0];
    const data = response.values.slice(1);
    const obj = data.map(arr =>
      Object.assign({}, ...keys.map((k, i) => ({[k]: arr[i]}))),
    );
    setAllSeriesData(obj);
    console.log(obj);
  }
  const test = () => {
    console.log('test');
  };

  return (
    <View>
      <Text style={styles.dropdownTitle}>Select Canteen for get Price List</Text>
      <View style={styles.dropdown}>
      <DropDownPicker
      placeholder="Select the Canteen"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={DataAPI}
      />
      </View>
     
      {value == null ? null : (
        <View style={styles.container}>
          <View>
            <Text style={styles.itemTitle}>Item Name</Text>
            <FlatList
              data={allSeriesData}
              renderItem={({item}) => (
                <Text style={styles.itemText}>{item.Name}</Text>
              )}
            />
          </View>
          <View>
            <Text style={styles.itemTitle}>Item Price</Text>
            <FlatList
              data={allSeriesData}
              renderItem={({item}) => (
                <Text style={styles.itemText}>{item.Price}</Text>
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // if you want to fill rows left to right
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
    marginBottom: 15,
  },
  itemText: {
    margin: 5,
    fontSize: 20,
  },
  dropdownTitle:{
    fontSize:20,
    marginLeft:20,
    marginTop:15
  },
  dropdown:{
 padding:15
  } 
});
export default PriceScreen;
