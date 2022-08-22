import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  ScrollView, StyleSheet, Image } from 'react-native';
import {  Card, Icon } from '@rneui/themed';
import { PricingCard, lightColors } from '@rneui/themed';
import { styles } from "./styles"
import { BackgroundImage } from '@rneui/base';

function HScreen({route, navigation }) {
  const { Producto, Categoria, Descripcion, Precio } = route.params;
  return (
    <View  style= {styles.container}>
      <Card>
      <Text style={styles.txtproductostyle} >{Producto}</Text>
        <Text style={styles.TextCategoria}>{Categoria}</Text>
        <Text style={styles.TextCategoria}>{Descripcion}</Text>
        <Text style={styles.textprecio}>{Precio}</Text>
        
      </Card>
     
        

    </View>
  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Articulos" component={HomeScreen} />
        <Stack.Screen name="detalles" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default HScreen;
