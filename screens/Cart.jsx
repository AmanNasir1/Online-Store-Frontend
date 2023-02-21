import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import constant from '../constant/constant';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {CartContext} from './CartContext';
const Cart = () => {
  const [products, SetProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${constant.baseURL}/api/product`);
      SetProducts(res.data.products);
    };
    fetchProducts();
  }, []);

  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  return (
    <View style={styles.cart}>
      <View style={styles.header}>
        <Icon name="user" color="#000" size={25} />
      </View>
      <View style={styles.subheader}>
        <View>
        <Text style={styles.heading}>Shopping</Text>
        <Text style={styles.subheading}>Cart</Text>
        </View>
        <Icon  name="delete" color="maroon" size={25}/>
      </View>
      {state.map((item, index) => {
        return <View style={styles.card} key={index}>
          <View>
            <Image source={{uri:`${item.productImg}`}} style={{width:100,height:100}} />
            <Text style={{color:"black"}}>{item.productName}</Text>
            <TouchableOpacity>
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{item.productSize}</Text>
            <TouchableOpacity>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>${item.price}</Text>
          </View>
        </View>;
      })}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cart:{
    marginLeft:25,
    marginRight:10,
  },
  header: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 8,
  },
  subheader: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginRight:25,
    marginTop:10


  },
  heading: {
    color: '#024F9D',
    fontSize:25,
    fontWeight:300
  },
  subheading: {
    color: '#61B846',
    fontSize:25,
    fontWeight:600,
  },
  card:{
    
  }
});
