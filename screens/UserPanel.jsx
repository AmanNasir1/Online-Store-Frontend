import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import axios from 'axios';
import constant from '../constant/constant';
import {color} from 'react-native-reanimated';
import Banner from '../assets/images/Grocery.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import icon from '../constant/icon';
const UserPanel = () => {
  const [category, SetCategory] = useState([]);
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(`${constant.baseURL}/api/category`);
      // console.log(res.data.categories);
      SetCategory(res.data.categories);

      // console.log(category)
    };
    fetchCategories();

    const fetchProducts = async () => {
      const res = await axios.get(`${constant.baseURL}/api/product/`);
      SetProducts(res.data.products);
      // console.log(val.productImg)

      // console.log(products)
    };
    fetchProducts();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.categories}>
        <Image
          style={styles.categoryImage}
          source={{
            uri: `${item.categoryImg}`,
          }}
        />
        <Text style={styles.categoryName}>{item.categoryName}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>SAYLANI WELFARE</Text>
          <Text style={styles.subheading}>DISCOUNT STORE</Text>
        </View>
        <View>
          <Image
            source={icon.Cart}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor:"#61B846"
            }}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.banner}>
          <Image source={Banner} style={styles.bannerImage} />
        </View>
        <View>
          <TextInput placeholder="Search Here...." style={styles.input} />
        </View>
        <View>
          <Text style={styles.h1}>Shop By Category</Text>
        </View>
        <View>
          <FlatList
            data={category}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => `${item._id}`}
            style={styles.catList}
          />
        </View>
        <View>
          {products.map(val => {
            return (
              <View style={styles.productContainer} key={val._id}>
                <View style={styles.productContent}>
                  <Image
                    style={styles.productImg}
                    source={{
                      uri: `${val.productImg}`,
                    }}
                  />
                  <View style={styles.productBar}>
                    <Text style={styles.productHeading}>{val.productName}</Text>
                    <Text style={styles.productDesc}>{val.productDesc}</Text>
                  </View>
                </View>
                <View style={styles.priceCon}>
                  <Text style={styles.price}>
                    {val.price}-per {val.unit}
                  </Text>
                  <TouchableOpacity style={styles.Add}>
                    <Text style={styles.AddText}>+</Text>
                  </TouchableOpacity>
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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignitems: 'center',
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },

  heading: {
    color: '#61B846',
    fontSize: 18,
    fontWeight: '700',
  },
  subheading: {
    color: '#024F9D',
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 25,
    backgroundColor: '#E8E8E8',
    marginTop: 5,
    padding: 5,
    color: '#6d6e71',
    paddingLeft: 20,
  },
  cart: {
    color: '#000000',
  },

  bannerImage: {
    marginLeft: 17,
    marginRight: 18,
    width: 326,
    height: 258,
    resizeMode: 'contain',
  },
  h1: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
    paddingLeft: 25,
    paddingRight: 22,
    paddingTop: 15,
  },
  categories: {
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginTop: 15,
  },
  categoryImage: {
    width: 90,
    height: 70,
    resizeMode: 'contain',
  },

  categoryName: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  categoriesContent: {
    alignItems: 'center',
  },

  productImg: {
    width: 70,
    height: 70,
    borderRadius: 7,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  productContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productHeading: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  productBar: {
    marginLeft: 10,
  },
  productDesc: {
    color: '#808080',
  },
  price: {
    color: '#000',
    fontWeight: '700',
  },
  priceCon: {
    paddingRight: 7,
    alignItems: 'center',
  },
  Add: {
    marginTop: 10,
    width: 60,
    marginLeft: 20,
    backgroundColor: '#59b300',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 15,
  },
  AddText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default UserPanel;
