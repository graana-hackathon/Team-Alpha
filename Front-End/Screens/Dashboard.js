/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Search from './Search.js';
import createStackNavigator from 'react-navigation'


export default class Dashboard extends React.Component {

  render(){
    return (
      
      <ScrollView>
        <View>
        <Image 
        style = {styles.dash_image}
        source = {require('./alpha.jpg')}/>
        <TouchableOpacity style = {styles.btn}
        onPress={() => this.props.navigation.navigate('Search')}>
          <Text style = {styles.btn_text}>Proceed!</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  
};

const styles = StyleSheet.create({
dash_image :
{
   backgroundColor:'#000',
   opacity : 0.9,
   height : hp('85%'),
   width : wp('100%')
},
btn :
{
  alignItems : 'center',
  backgroundColor : '#1D1B1B',
  height : hp('15%')
},
btn_text :
{
  fontFamily : 'notoserif',
  fontSize : hp("5%"),
  marginTop : hp('1%'),
  fontWeight : 'bold',
  color : "#EC4D37"
}
});
