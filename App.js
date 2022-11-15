import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Button, TextInput } from 'react-native';


// flex for space view uses flex by default
// scrollview for scrollable view
// on input change takes the value directly not e.target.value


export default function App() {
  const [input , setInput] = useState("")
  const [goals , setGoals] = useState([])

const handleGoalInput = (value)=>{
setInput(value)
}

const saveGoalHandler = ()=>{
setGoals((prev)=>[...prev , input])
setInput(()=>'');
}

  return (
    <View style={styles.appContainer}>
     <View style={styles.goalAddContainer}>
      <TextInput style={styles.input} value={input} onChangeText={handleGoalInput} placeholder='Enter Your Goal' />
      <Button onPress={saveGoalHandler} title='Enter' />
     </View>
     <View style={styles.listContainer}>
      <Text>Your Goals...{goals.length}</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  paddingTop:50,
  paddingHorizontal:16,
  flex:1
 },
 goalAddContainer : {
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginBottom:20,
 },
 input : {
  width:'80%',
  borderWidth:1,
  borderColor:'#cccccc',
  marginRight:18,
  padding:8
 },
 listContainer: {
  flex:2
 }
});
