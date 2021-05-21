import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../../consts/colors';
import { data }  from '../../consts/data';
const width = Dimensions.get('window').width / 2 - 20;

export default class List extends React.Component {
  render() {
    return (  
      <View style={stylesList.container}>
        <ScrollView>
        <View style={stylesList.fullWidth}>
    
        {data.map((data, key) => 
          <View style={stylesList.item} key={key}>
            <TouchableOpacity 
              style={stylesList.card} 
              onPress={ () => this.props.navigation.navigate( 'Detail' ) }
            >
              
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={data.img}
                  style={{flex: 1, resizeMode: 'contain'}}
                />
              </View>

              <Text style={{fontWeight: 'bold', fontSize: 17, color: "white", marginTop: 10}}>
                {data.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text style={{fontSize: 19, color: "white", fontWeight: 'bold'}}>
                  ${data.price}
                </Text>
                <View
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "black",
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                    <Icon
                    name="pageview"
                    size={18}
                    color={"white"}
                  />
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          )}

          </View>
          </ScrollView>
        </View>
    );
  }
}

const stylesList = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' 
  },
  item: {
    alignItems: 'center',
    width: '50%',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16, 
    color: 'grey', 
    fontWeight: 'bold'
  },
  categoryTextSelected: {
    color: Color.dark,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: Color.dark,
  },
  card: {
    height: 225,
    backgroundColor: 'gray',
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    padding: 15,
    margin: 4,

  },
  header: {
    backgroundColor: "white",
    height: 100,
    marginTop: 30,
  },
  searchContainer: {
    height: 50,
    backgroundColor: "lightgray",
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: "brown",
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: Color.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
    fullWidth: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});
