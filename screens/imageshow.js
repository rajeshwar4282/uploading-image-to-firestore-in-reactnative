import React from 'react';
import { Image, StyleSheet, Button, Text, View, Alert,TextInput,Component } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import firebase ,{db}from '../config/Firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Cardupload extends React.Component {
    
        state = {
          image: 'https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
        }
       
  
      render() {
        let { image } = this.state;
         db.collection('imagepicker')
           .doc('pics')
           .get().then(doc => {
            if (doc.exists) {
              this.setState({
                  image:doc.data().image
              })
          }
          })
        return (
        
        <View style={styles.container}>

          <Image style={{width:200,height:200}} source={{uri:this.state.image}}/>
        </View>
        );
     }
}
       

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
 },
 container2: { 
  flex: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: 35,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center'
},
 button: {
  marginTop: 20,
  marginBottom: 15,
  paddingVertical: 5,
  alignItems: 'center',
  backgroundColor: '#66B2FF',
  borderColor: '#66B2FF',
  borderWidth: 1,
  borderRadius: 5,
  width: 100
},
button1: {
  marginTop: 10,
  marginBottom: 30,
  paddingVertical: 5,
  alignItems: 'center',
  backgroundColor: '#66B2FF',
  borderColor: '#66B2FF',
  borderWidth: 1,
  borderRadius: 5,
  width: 200
},
buttonText:{
  fontSize: 10,
  fontWeight: 'bold',
  color: '#fff'
},
buttonText1:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#fff'
},
inputStyle: {
  width: '100%',
  marginBottom: 15,
  paddingBottom: 15,
  alignSelf: "center",
  borderColor: "#ccc",
  borderBottomWidth: 1
}
});