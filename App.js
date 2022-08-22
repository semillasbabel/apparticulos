import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  ScrollView, StyleSheet, Image } from 'react-native';
import {  Card, Icon } from '@rneui/themed';
import { PricingCard, lightColors } from '@rneui/themed';
import  Screen from './Details';
import { styles } from "./styles"

function HomeScreen({ navigation }) {
  return (
    <View  style={styles.container}> 
      
      <ScrollView> 
      
      <Card>
          <Card.Title>CEMENTO</Card.Title>
          <Card.Divider />
          <Card.Image
             style={{ padding: 0 , width: 200, height:200, marginHorizontal:75}}
            source={{
              uri:
                'https://tabueno.s3.us-east-2.amazonaws.com/productos/4/107/20200703124213-0-31.jpg',
            }}
          />
          <Text style={{marginLeft: 135,marginBottom: 10, fontSize:20 }}>
            Cemento 
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              
            }}
            title="Ver Detalles"  onPress={() => navigation.navigate('HScreen',{
              Producto: "Producto: Cemento Holcim", 
              Categoria: "Categoria: Construccion", 
              Precio: "Precio: ₡7500",
              Descripcion: 'Descripcion: Mezcla para Concreto compactada en saco',
              foto : source=
                  'https://tabueno.s3.us-east-2.amazonaws.com/productos/4/107/20200703124213-0-31.jpg',
            
            })}
          />
        </Card>
        <Card>
          <Card.Title>Varilla Corrugada</Card.Title>
          <Card.Divider />
          <Card.Image
              style={{ padding: 0 , width: 200, height:200, marginHorizontal:75}}
            source={{
              uri:
                'https://th.bing.com/th/id/OIP.kD-4fPM9Z5oi0kklfWDkXAHaFx?pid=ImgDet&rs=1',
            }}
          />
          <Text style={{marginLeft: 135,marginBottom: 10, fontSize:20 }}>
            Varilla #3 
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              
            }}
            title="Ver Detalles"  onPress={() => navigation.navigate('HScreen',{
              Producto: "Producto: Varilla  #3", 
              Categoria: "Categoria: Construccion", 
              Precio: "Precio: ₡2850",
              Descripcion:'Descripcion: Varilla #3 corrugada para amarre de paredes'
            })}
          />
        </Card>
        <Card>
          <Card.Title>Ladrillo Rustico</Card.Title>
          <Card.Divider />
          <Card.Image
               style={{ padding: 0 , width: 200, height:200, marginHorizontal:75}}
            source={{
              uri:
                'https://th.bing.com/th/id/R.b22a64d951da01fa9cc96452f598870e?rik=EFrY5t2tfrCqUg&riu=http%3a%2f%2ffiles.123inventatuweb.com%2facens72212%2fimage%2ffa9d8ea673fc49a4a238c0e1806a7073.jpg&ehk=%2fKq37oAh0LL%2bkISvhSsZzvWABtZWXQV8xhq4CC5RnG0%3d&risl=&pid=ImgRaw&r=0',
            }}
          />
          <Text style={{marginLeft: 130,marginBottom: 10, fontSize:20 }}>
            Ladrillo Rojo
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              
            }}
            title="Ver Detalles"  onPress={() => navigation.navigate('HScreen',{
              Producto: "Producto: Ladrillo ", 
              Categoria: "Categoria: Acabados", 
              Precio: "Precio: ₡575",
              Descripcion:'Descripcion: ladrillo rojo para acabados en muros'
            })}
          />
        </Card>
        

        <Card>
          <Card.Title>BLOCK</Card.Title>
          <Card.Divider />
          <Card.Image
                style={{ padding: 0 , width: 200, height:200, marginHorizontal:75}}
            source={{
              uri:
                'https://th.bing.com/th/id/R.3040740ebd04ef150b9abc3c499df007?rik=8qFDf%2bJutfvshg&pid=ImgRaw&r=0',
            }}
          />
          <Text style={{marginLeft: 115,marginBottom: 10, fontSize:20 }}>
           Block concreto        
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              
            }}
            title="Ver Detalles"  onPress={() => navigation.navigate('HScreen',{
              Producto: "Producto: Block Cemento", 
              Categoria: "Categoria: Construccion", 
              Precio: "Precio: ₡385",
              Descripcion:'descripcion : Block en concreto medida 12x20x40'
            })}
          />
        </Card>
       
        </ScrollView>
    </View>
  );
}


function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'black' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: '#3BB0F7'},
            headerTintColor: '#fff',
          headerTitleStyle:{
            fontSize: 25,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Articulos"}}/>
        <Stack.Screen name="HScreen" component={Screen} options={{title:"Detalles"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
