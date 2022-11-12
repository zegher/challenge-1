import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Tile from './components/tile';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text onPress={() => console.log("Click Bookstore")} style={styles.heading}>Bookstore</Text>
      <Text style={styles.number}>1</Text>
      <Image style={styles.cart} source={require('./assets/scart.webp')}></Image>
      
      <View style={styles.tilesContainer}>
        <Tile 
        title="It Ends With Us" 
        writer="Coleen Hoover" 
        description="SOMETIMES the ONE WHO LOVES YOU IS the ONE WHO HURTS YOU the MOST. Lily hasnt always had it easy, but thats never stopped her from working hard for the life she wants."
        isbn="978-8-2165-1860-1"/>
      </View> 
      
      <View style={styles.tilesContainer}>
        <Tile 
        title="The Fault In Our Stars" 
        writer="Hank Green" 
        description="Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam."
        isbn="852-8-1523-6969-1"/>
      </View> 
      
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
  tilesContainer: {
    padding: 5,
  },
  heading: {
    fontSize: 35,
    paddingTop: 30,
    fontWeight: 'bold',
  },
  cart: {
    width: 50,
    height: 50,
    marginLeft: 325,
    marginTop: -65,
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 355,
    marginTop: -15,
    zIndex: 1,
  },

});
