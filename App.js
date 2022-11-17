import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Button, TextInput, Image } from 'react-native';
import GoalsInput from './components/GoalsInput';
import GoalsList from './components/GoalsList';


// view is used to wrap all elements
// text component to wrap text inside
// stylesheet to create css objects

// flex for space view uses flex by default
// scrollview for scrollable view
// on input change takes the value directly not e.target.value


// scrollview and flatlist are two methods to dispplay scrollable content
// flatlist is the better method as it renders the data on the go not prerending large data




// image is added with absolute path by require method in the source
// custom buttons can be created using pressable native feature
// modal can be created with modal component


















export default function App() {
 
  const [goals , setGoals] = useState([])

const saveGoalHandler = (value)=>{
  setGoals((prevGoals)=> [...prevGoals , {id:Math.random() , value}])
}

const removeGoal = (id)=>{
setGoals((prev)=> {
  return prev.filter((item)=> item.id !== id)
})
}

  return (
    <>
    <StatusBar color='dark' />
    <View style={styles.appContainer}>
      <View style={{justifyContent:'center' , alignItems:'center'}}>
      <Image style={{height:250 , width:250 , marginTop:18}} source={require('./assets/myimg/img.png')} />
      </View>
    <GoalsInput saveGoalHandler={saveGoalHandler} />
   <GoalsList onDelete={removeGoal} goals={goals} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  paddingTop:50,
  paddingHorizontal:16,
  flex:1
 }
});
