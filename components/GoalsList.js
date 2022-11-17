import React from 'react';
import { StyleSheet, Text, View , Button, TextInput, FlatList, Pressable } from 'react-native';


// rendering entire list of goals here

const GoalsList = ({goals , onDelete}) => {


  const renderList = (value)=>{

  const  handleRemove = (ev)=>{
    onDelete(ev)
  }

    return <Pressable android_ripple={{color:'#dddddd'}} android_disableSound={false} onPress={()=>handleRemove(value.item.id)} style={styles.goalContent}><Text >{value.item.value}</Text></Pressable>
 }


  return (
    <View style={styles.listContainer}>
        <FlatList data={goals}
        renderItem={renderList}
        keyExtractor={item => item.id}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    listContainer: {
        flex:2
       },
       goalContent: {
        backgroundColor:'#0eeeee',
        marginVertical:2,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        display:'flex'
       }

})

export default GoalsList