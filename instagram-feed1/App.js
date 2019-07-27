import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/image.png')} style={styles.imgPost}/>
         {/* <View style={styles.bar}>
          <Ionicons name='md-arrow-back' size={27}/>
          <FontAwesome name='th-large' size={27} style={{marginLeft:298}}/>
         </View> */}
      </View>
      <View style={styles.body}>
        <View style={styles.address}>
          <View>
            <Text style={{fontFamily:'serif',fontWeight:'bold',fontSize:26}}>Yoga Life</Text>
            <View style={styles.Location}>
              <Entypo name='location-pin' size={20} color='#bdc3c7'/>
              <Text style={styles.TextLable}>Hồ Chí Minh, Việt Nam</Text>
            </View>
          </View>
          <Image source={require('./assets/1.png')} style={{marginLeft:100, borderColor:'#bdc3c7'}}/>
        </View>
        <Text style={{flex:0.2, marginTop:10, fontWeight:'200'}}>Yoga là suối dòng của tuổi trẻ. Bạn chỉ có thể trẻ mãi khi xương cốt của mình dẻo dai.</Text>
        <View style={styles.hashtag}>
          <View style={styles.photo}>
            <Text style={styles.TextLable}>#Photographpy</Text>
          </View>
          <View style={styles.sea}>
            <Text style={styles.TextLable}>#sea</Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Ionicons name='md-heart' size={26} color='#6c7a89' />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name='comment' size={26} color='#6c7a89'style={{marginHorizontal:20}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name='bookmark' size={26} color='#6c7a89'style={{marginLeft:216}}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.fooder}>
        <MaterialIcons name="clear-all" size={27} color='#6c7a89' />
        <SimpleLineIcons name='plus' size={27} color='#6c7a89' style={{marginHorizontal:60}}/>
        <Ionicons name='md-contacts' size={27} color='#6c7a89'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex:0.55,
  },
  imgPost:
  {
    width:"100%",
    height:"100%",
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
  },
  bar:{
    flexDirection:"row",
    marginHorizontal:20,
  },
  body:{
    flex:0.4,
    marginTop:30,
    marginHorizontal:25,
  },
  address:{
    flex:0.4,
    flexDirection:'row',
  },
  Location:{
    marginVertical:5,
    flexDirection:'row',
  },
  hashtag:{
    flex:0.2,
    marginTop:30,
    flexDirection:'row'
  },
  photo:{
    width:120,
    height:25,
    borderRadius:10,
    backgroundColor:'#ecf0f1'
  },
  sea:{
    marginHorizontal:10,
    width:55,
    height:25,
    borderRadius:10,
    backgroundColor:'#ecf0f1'
  },
  TextLable:{
    marginHorizontal:10,
    marginVertical:2,
    color:'#6c7a89'
  },
  button:{
    marginTop:20,
    flex:0.2,
    flexDirection:'row'
  },
  fooder:{
    flex:0.05,
    marginHorizontal:25,
    marginVertical:8,
    flexDirection:"row",
    justifyContent:'center'
  }
});
