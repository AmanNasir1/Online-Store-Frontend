import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import icon from '../constant/icon';
import Logo from '../assets/images/Logo.png';
const AdminPanel = () => {
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${constant.baseURL}/api/product`);
      SetProducts(res.data.products);
      //   console.log(res.data.products[1])
    };
    fetchProducts();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.logo} resizeMode="contain" source={Logo} />
          <View style={styles.content}>
            <Text style={styles.heading}>Mr. Ahmed</Text>
            <Text style={styles.subheading}>Admin</Text>
          </View>
        </View>
        <View style={styles.icon}>
          <Image
            source={icon.Filter}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.headings}>All Products</Text>
        </View>
        <View>
          {products?.map(val => {
            return (
              <View style={styles.products} key={val._id}>
                <View style={styles.contents}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: `${val.productImg}`,
                    }}
                  />
                  <View style={styles.head}>
                    <Text style={styles.heading}>{val.productName}</Text>
                    <Text style={styles.subPrice}>
                      {val.productSize} {val.unit}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.price}>${val.price}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  products: {
    // width:"100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: '#65BD50',
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 28,
    marginRight: 28,
    marginBottom: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 50,
    height: 50,
  },
  imgContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
  },
  heading: {
    color: '#024F9D',
    fontSize: 18,
    fontWeight: '700',
  },
  headings: {
    color: '#024F9D',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  subheading: {
    color: '#61B846',
    fontSize: 16,
    fontWeight: '600',
  },
  iconText: {
    color: '#000000',
  },
  icon: {
    marginRight: 10,
  },

  tinyLogo: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
  },
  subPrice: {
    color: '#C3C1C1',
  },
  contents: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  head: {
    marginLeft: 15,
  },
  price: {
    color: '#C3C1C1',
  },
});

export default AdminPanel;
