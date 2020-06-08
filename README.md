# uploading-image-to-firestore-in-reactnative
creating a react-native app to capture photos or selecting from mobile and uploading and retreiving data from cloud firestore

  1.CREATE A APP USING EXPO-CLI
  
     expo init react-image-picker
   ->this creates a all default project folders
   
  2.INSTALLING REACT-NATIVE-IMAGE-PICKER OR EXPO-IMAGE-PICKER
     
   FOR REACT-NATIVE-CLI
           
        npm install --save react-native-image-picker
   FOR EXPO-CLI
    
        expo install expo-image-picker
        
  3.ADDING REACT-NAVIGATION TO OUR PROJECT AND CREATING TWO SCREENS
  
       expo install react-navigation
     
   ->this adds navigation between screens
    
       screens/imageupload 
   ->this is the starting page of our app which contains two buttons to select a image from library or capturing a photo from camera....and it uploads the        image uri into firebase .
   ->Basically in mobile-development platform captured image will be considered as object containing different attributes as shown below in console log
   
   
     
