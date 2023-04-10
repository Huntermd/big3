import { StyleSheet, Text, View, Button, Linking, Image, TextInput, StatusBar } from 'react-native'
import React from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


export default function Scanner() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const [UPC, setUPC] = useState(null)
  useEffect(() => {
    console.log(UPC)
  
  }, [UPC])
  /*
  useEffect(() => {
    askPermissions();
  }, [hasPermission]);
  */
  const askPermissions = () => {
    (async () => {
      console.log("Asking for permissions");
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setUPC(data)
   
  };
  if (hasPermission && hasPermission) {
      console.log("Camera opened, permission true");
      
      return (
        <View>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }}
          />
        </View>
      );
    }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          padding: 100,
        }}
      >
        <Image
          source={{
            uri: "https://i.ibb.co/tmvt00w/logo.png",
          }}
          style={{ height: 300, width: 300, borderRadius: 1000 }}
        />

        <TextInput
          placeholder="Enter barcode"
          onChangeText={(val) => setUPC(val)}
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 10,
            marginBottom: 10,
          }}
        />
        <Button title="Open camera" onPress={askPermissions} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

