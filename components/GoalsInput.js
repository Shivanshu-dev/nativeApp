import React, {useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput } from 'react-native';

const GoalsInput = ({ saveGoalHandler}) => {
  const [input , setInput] = useState("");


    const handleGoal = (value)=>{
      setInput(()=> value);
      
    }
    const saveGoal = ()=>{
      if(!input.length) return;
        saveGoalHandler(input)
        setInput(()=> '');
    }


  return (
    <View style={styles.goalAddContainer}>
      <TextInput style={styles.input} value={input} onChangeText={handleGoal} placeholder='Enter Your Goal' />
      <Button onPress={saveGoal} title='Enter' />
     </View>
  )
}

const styles = StyleSheet.create({
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
})

export default GoalsInput;