import React from 'react';
import { Image, StyleSheet, Button, Text, View, Alert,TextInput,Component } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import firebase ,{db}from '../config/Firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Cardupload extends React.Component {
    
        state = {
          image: '',
          username: ''
        }
      
        onChangeTitle = username => {
          this.setState({ username })
        }
      
        selectImage1 = async () => {
          try {
            let result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
            });
            if (!result.cancelled) {
              this.setState({ image: result.uri });
            }
      
            console.log(result);
          } catch (E) {
            console.log(E);
          }
        }
        selectImage2 = async () => {
          try {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
            });
            if (!result.cancelled) {
              this.setState({ image: result.uri });
            }
      
            console.log(result);
          } catch (E) {
            console.log(E);
          }
        }
      onSubmit =  () => {
          const post = {
            image: this.state.image,
            username: this.state.username
          }
          db.collection('imagepicker')
            .doc('pics')
            .set(post)
          this.setState({
            image1: '',
            username: '',
          })
          alert("success")
          this.props.navigation.navigate('imageshow')
      }
  
 
  
      render() {
        let { image } = this.state;
       
        return (
        
        <View style={styles.container}>
       
        <Text>image-picker</Text>
        <TouchableOpacity style={styles.button} onPress={()=>this.selectImage1()}>
          <Text style={styles.buttonText}>Take a photo</Text>
        </TouchableOpacity>
        
      <Text>  </Text>
      
        <TouchableOpacity style={styles.button} onPress={()=>this.selectImage2()}>
          <Text style={styles.buttonText}>Select image from phone</Text>
        </TouchableOpacity>
        
        
       <Text></Text>
        <TextInput
        placeholder='Enter Username'
        style={styles.inputStyle}
        value={this.state.username}
        onChangeText={username => this.onChangeTitle(username)}
        />
        
        <TouchableOpacity style={styles.button1} onPress={()=>this.onSubmit()}>
          <Text style={styles.buttonText1}>submit</Text>
        </TouchableOpacity>
        
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