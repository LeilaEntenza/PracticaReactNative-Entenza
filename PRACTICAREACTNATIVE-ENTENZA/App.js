import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [num, setNum] = useState(1);

  const sumar = () =>{
    setNum(num + 1);
  }
  return (
    
    <View style={styles.container}>
      <View style={styles.boton}>
      <Button
        onPress={sumar}
        title="Sumar número"
        color="#841584"
        margin="1%"
        border-radius="15px"
      />
    </View>
    <Text>{num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32a893',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton:{
    margin: '1%',
  }
});
