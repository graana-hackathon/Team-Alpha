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
  ScrollView,
  FlatList
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import SearchBar from 'react-native-searchbar'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
console.disableYellowBox = true;



  export default class Search extends React.Component {

    
    constructor(props)
    {
        super(props);
        this.state =
        {
            name : 'Hassan',
            dataSource : [],
            temp : []
        }
    }

    componentDidMount()
{
    return fetch('https://graana.000webhostapp.com/search-api.php?type=house&budget=61000000&bedrooms=0&locality=Islamabad')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson,
      }, function(){
        this.setState(
          {
            temp : this.state.dataSource
          }
        )
      });
    })
    .catch((error) =>{
      console.error(error);
    });
}

_handleResults(results) {
  this.setState(
    {
      dataSource : results
    }
  )
}

results(text)
{
    // if (text == "")
    //   {
    //   this.setState(
    //    {
    //      dataSource : this.state.temp
    //    }
    //  )
    // }
}

    render() {
  return (
    
<View>
    <SearchBar
    style = {styles.search}
    ref={(ref) => this.searchBar = ref}
    data={this.state.temp}
    handleResults={results => this._handleResults(results)}
    handleChangeText = {text => this.results(text)}
    backButton = {
      <Icon
        name="arrow-right"
        size={15}
        color="black"
      />
    }
    closeButton = {
      <Icon
        name="cross"
        size={15}
        color="black"
      />
    }
    showOnLoad/>
    <View styles = {{marginTop : hp('10%')}}>
    <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <Card
          title = {item.locality}
          image = {require('./House2.jpg')}>
            <Text style = {{fontWeight : 'bold', fontFamily : 'sans', fontSize : hp('3%')}}>${item.demandPrice}</Text>
  <Text style = {{marginTop : hp('2%'),  fontFamily : 'sans', fontSize : hp('2.5%')}}>This house has {item.bedrooms} rooms, {item.baths} baths , {item.garages} garages</Text>
            <Button
            buttonStyle={{marginTop : hp('2%'), backgroundColor : '#1D1B1B'}}
            title='SEE DETAILS'
            titleStyle = {{color : '#EC4D37'}} />
          </Card>}
          keyExtractor={({id}, index) => id}
        />
    </View>
</View>
  );
};
  }

const styles = StyleSheet.create({
    search :
    {
        width : wp('75%'),
        height : hp('15%')
    }
});