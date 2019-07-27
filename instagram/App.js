import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const imgData = [
  { id: 1, imgSource: require('./assets/1.png') },
  { id: 2, imgSource: require('./assets/2.png') },
  { id: 3, imgSource: require('./assets/3.png') },
  { id: 4, imgSource: require('./assets/4.png') },
  { id: 5, imgSource: require('./assets/5.png') },
  { id: 6, imgSource: require('./assets/6.png') },
  { id: 7, imgSource: require('./assets/7.png') },
  { id: 8, imgSource: require('./assets/8.png') },
  { id: 9, imgSource: require('./assets/9.png') },
  { id: 10, imgSource: require('./assets/10.png') }
];

export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);
  return (
    <View style={styles.container}>
 <View style={styles.headerBar}>
       <TouchableOpacity>
          <Ionicons name='md-arrow-back' size={27} color='#6c7a89'/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name='th-large' size={27} color='#6c7a89' style={{marginLeft:298}}/>
        </TouchableOpacity>
    </View>  
      <View style={styles.header}>
        <View style = {styles.wrapperAvatar}>
        <Image
          style={styles.avatar}
          source={require('./assets/avatar.png')}/>
        </View>
        <View style={styles.userInfo}>
          <Text style={{fontWeight:"bold",fontSize:18}}>Nguyễn Phạm Tường Duy</Text>
          <Text style={styles.countLable}>Student</Text>
          <View style={styles.wrapperUser}>
            <TouchableOpacity>
              <View style={[styles.btnFollow,styles.btnLabel]}>
                <Text style={{color:"#fff", fontSize:15}}>Follow</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.btnSend,styles.btnLabel]}>
              <Feather name="send" size={22} color="#fff"/>
              </View>
            </TouchableOpacity>
            </View>
        </View>
      </View>
      <View style={styles.countArea}>
      <View>
        <Text style={styles.countText}>210</Text>
        <Text style={styles.countLable}>Photos</Text>
      </View>
      <View>
        <Text  style={styles.countText}>210k</Text>
        <Text  style={styles.countLable}>Folowers</Text>
      </View>
      <View>
        <Text  style={styles.countText}>210</Text>
        <Text  style={styles.countLable}>Followings</Text>
      </View>
      </View>
      <View style={styles.imageArea}>
        <ScrollView contentContainerStyle={styles.ScrView}>
          <View>
            {imgData.slice(0,centerImgData).map(item =>{
              return <Image source={item.imgSource} style={styles.image} key={item.id}/>
            })}
          </View>
          <View >
              {imgData.slice(centerImgData).map(item =>{
                return <Image source={item.imgSource} style={styles.image} key={item.id}/>
              })}
          </View>
          </ScrollView>
      </View>
      <View style={styles.fooder}>
        <TouchableOpacity>
        <MaterialIcons name="clear-all" size={27} color='#6c7a89'/>
        </TouchableOpacity>
        <TouchableOpacity>
        <SimpleLineIcons name='plus' size={27} color='#6c7a89' style={{marginHorizontal:60}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name='md-contacts' size={27} color='#6c7a89'/>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBar:{
    flex:0.05,
    marginHorizontal:20,
    marginVertical:15,
    flexDirection:"row"
  },
  header:{
    flex:0.20,
    backgroundColor:'#ffffff',
    flexDirection:"row",
  },
  wrapperAvatar:{
    flex:0.4,
    justifyContent:"center",
    alignItems:"center",
  },
  avatar:{
    width:120,
    height:120,
    borderRadius:60
   },
   userInfo:{
    flex:0.6,
    fontWeight:'bold',
    justifyContent:"center",
    fontStyle:'italic',
    fontSize:20,
   },
   wrapperUser:{
    flexDirection:"row",
    marginTop:10,
   },
   btnFollow:{
    height:30,
    width:100,
    borderRadius:15,
    backgroundColor:'#4d05e8',
   },
   btnSend:{
    marginLeft:20,
    height:30,
    width:50,
    borderRadius:15,
    backgroundColor:'#19b5fe',
   },
   btnLabel:{
    justifyContent:"center",
    alignItems:"center",
    fontStyle:'italic',
    fontSize:20,
    
   },
  countArea:{
    flex:0.12,
    backgroundColor:'#ffffff',
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"row",
  },
  countText:{
    fontSize:20,
    fontWeight:'bold',
    marginHorizontal:7
  },
  countLable:{
    fontSize:13,
    fontWeight:'200',
    color:'#6c7a89'
  },
  imageArea:{
    flex:0.58,
    marginHorizontal:10,
    backgroundColor:'#fff',
  },
  image:{
    width:160,
    height:140,
    marginTop:12,
    borderRadius:15
  },
  ScrView:{
    justifyContent:'space-evenly',
    flexDirection:'row'
  },
  fooder:{
    flex:0.05,
    marginHorizontal:20,
    marginVertical:8,
    flexDirection:"row",
    justifyContent:'center'
  }
});
