import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';

import { Feather } from '@expo/vector-icons';

const feedData = [
  {
    id: 1,
    name: 'CoderSchool',
    image: require('./assets/2.png'),
    likeCount: 128,
    avatar: require('./assets/avatar.png')
  },
  {
    id: 2,
    name: 'CoderSchool',
    image: require('./assets/3.png'),
    likeCount: 128,
    avatar: require('./assets/avatar.png')
  },
  {
    id: 3,
    name: 'CoderSchool',
    image: require('./assets/4.png'),
    likeCount: 128,
    avatar: require('./assets/avatar.png')
  },
  {
    id: 4,
    name: 'CoderSchool',
    image: require('./assets/5.png'),
    likeCount: 128,
    avatar: require('./assets/avatar.png')
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          }}
          style={{
            flex: 1,
            width: null,
            height: 44
          }}
          resizeMode="contain"/>
          <Feather name="inbox" size={27} color="black" />
      </View>
      <View style={styles.body}>
      <ScrollView>
        {feedData.map(feed =>{
          return (
          <View>
            <View style={styles.one}>
              <Image 
                  source={feed.avatar}
                  style={styles.avatarImage}
                  resizeMode="cover"/>
              <Text style={{fontWeight:'bold',fontSize:23,marginLeft:10}}>Hoa hong</Text>
            </View>
            <View style={styles.two}>
              <Image 
                  source={feed.image}
                  style={styles.imagePost}
                  resizeMode="cover"/>
            </View>
            <View style={styles.three}>
                <Feather 
                name="heart"
                size={27}
                color='black'
                />
                <Feather 
                name="message-square"
                size={27}
                color='black'
                style={{marginLeft: 10}}
                />
                <Feather 
                name="share"
                size={27}
                color='black'
                style={{marginLeft: 10}}
                />
            </View>
            <View style={styles.four}>
              <Feather
                name="heart"
                size={27}
                color="black"
                onPress={() => alert("Liked")}/>
                <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10}}>Liked</Text>
              </View>
          </View>
          )})
        }
         </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex:0.15,
    flexDirection: 'row',
    backgroundColor: '#f3f6fa',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body:{
    flex:0.8,
    backgroundColor:'#fff',
  },
  one:{
    flex:0.3,
    flexDirection:"row",
    alignItems:'center',
    marginLeft:30,
    marginTop:5,
  },
  avatarImage:{
    width:60,
    height:60,
    borderRadius:30,
  },
  two:{
    marginTop:5,
    flex:0.4,
    alignItems:'center'
  },
  imagePost:{
    width:300,
    height:300,
  },
  three:{
    flex:0.2,
    flexDirection:'row',
    marginVertical:15,
    marginHorizontal:30,
    borderBottomWidth:1,
  },
  four:{
    flex:0.2,
    flexDirection:'row',
    marginHorizontal:30,
  },
});
