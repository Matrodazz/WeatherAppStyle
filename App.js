import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.date}>25 Setembro 2023</Text>
    <Text style={styles.text1}>Sao Paulo, SP</Text>
    <Text style={styles.temperature}>32°</Text>
    <Text style={styles.description}>Limpo</Text>

    <View style={styles.container1}>
      <Text style={styles.text2}><Ionicons name="leaf-outline" size={20} color="gray" />{'\n'}14 Km</Text>
      <Text style={styles.text2}><Ionicons name="thermometer-outline" size={20} color="gray" />{'\n'}33.8°</Text>
      <Text style={styles.text2}><Ionicons name="rainy-outline" size={20} color="gray" />{'\n'}39%</Text>
    </View>

    <Text style={styles.title}>AQI</Text>
    <View style={styles.container2}>
      <Text style={styles.text3}>36</Text>
      <View style={styles.container3}>
        <Text style={styles.text4}>OTIMO</Text>
      </View>
    </View>

    <Text style={styles.title}>Hoje</Text>
    <View style={styles.container4}>
      <View style={styles.container5}>
        <Text style={styles.grid}>34°</Text>
        <Text style={styles.text5}>14:00</Text>
      </View>

      <View style={styles.container5}>
        <Text style={styles.grid}>31°</Text>
        <Text style={styles.text5}>18:00</Text>
      </View>

      <View style={styles.container5}>
        <Text style={styles.grid}>29°</Text>
        <Text style={styles.text5}>21:00</Text>
      </View>

      <View style={styles.container5}>
        <Text style={styles.grid}>24°</Text>
        <Text style={styles.text5}>00:00</Text>
      </View>
    </View>
       
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121318',
    padding: 8,
  },

  temperature: {
    margin: -15,
    fontSize: 110,
    color: '#D3D3D3',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  date: {
    margin: 0,
    fontSize: 17,
    color: '#D3D3D3',
    textAlign: 'center',
    opacity: 0.7,
  },

  text1: {
    margin: 0,
    fontSize: 25,
    color: '#D3D3D3',
    textAlign: 'center',
  },

  text2: {
    margin: 2,
    fontSize: 20,
    color: '#D3D3D3',
    textAlign: 'center',
  },

  text3: {
    margin: 1,
    fontSize: 40,
    color: '#64B082',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  text4: {
    margin: 1,
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

   text5: {
    marginTop: 0,
    margin: 5,
    fontSize: 15,
    color: '#D3D3D3',
    textAlign: 'center',
    padding: 12,
    opacity: 0.6,
  },

  title: {
    margin: 10,
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
    
  },


  description: {
    marginBottom: 10,
    fontSize: 20,
    color: '#D1C3E6',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  grid: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 20,
    color: '#D1C3E6',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  container1: {
    margin: 10,
    height: 150,
    padding: 30,
    backgroundColor: '#1D2027',
    borderRadius: 18,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  container2: {
    margin: 10,
    padding: 20,
    backgroundColor: '#002810',
    borderRadius: 18,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  container3: {
    margin: 10,
    padding: 15,
    backgroundColor: '#005D27',
    borderRadius: 18,
    
  },

  container4: {
    marginTop: -10,
    margin: 10,
    padding: 15,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },

  container5: {
    margin: 0,
    padding: 0,
    backgroundColor: '#20232C',
    borderRadius: 18,
    
  },

});
