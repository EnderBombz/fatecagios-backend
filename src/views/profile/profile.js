import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img: "https://i.imgur.com/q0pVICG.jpg",
    author: 'Gustavo Patricio',
    descricao: 'Trabalho na area de desenvolvimento mobile, estudo na FATEC-ITU, e sou foda.',
    email: 'gustavo.patricio@fatec.sp.gov.br',
    Instituicao: 'Centro Paula Souza',
    icon: 'https://i.imgur.com/SALXaTr.jpg',
  },
]

export default function App() {
  return (
    <>
      <View style={{ backgroundColor: '#000557', paddingVertical: 20 }}>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
              <Avatar.Image size={45} source={{ uri: DATA[0].icon }} />
              <Text style={{ margin: 8, fontSize: 20, marginRight: 80 }}>{DATA[0].author}</Text>

            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={styles.campoTitulo}>Email</Text>
              <Text style={styles.campo}>{DATA[0].email}</Text>
              <Text style={styles.campoTitulo}>Instituição</Text>
              <Text style={styles.campo}> {DATA[0].Instituicao}</Text>
              <Text style={styles.campoTitulo}>Descrição</Text>
              <Text style={styles.campo}>{DATA[0].descricao}</Text>
            </View>


          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  font: {
    color: '#fff',
  },
  campo: {
    fontSize: 14,
    padding: 5,
  },
  campoTitulo: {
    fontSize: 20,
    fontWeight:'bold',
    padding: 5,
  },
  campos: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {

    backgroundColor: '#000557',
    alignItems: 'center',

  },
  card: {
    backgroundColor: '#ffffff',
    margin: 20,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 100,
    borderRadius: 5,
  },
  touchableButton: {
    backgroundColor: '#00022E',
    padding: 10,
    borderRadius: 5,
    margin: 2,
  },
  item: {
    backgroundColor: '#ececec',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 15,

  },
  textButton: {
    color: '#FFf',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 13,
  },
  white: {
    color: '#fff',
  },
  title: {
    fontSize: 32,
  },
  tittleCard: {
    marginLeft: 16.5,
    fontSize: 19.5,
    fontWeight: `bold`,
    color: '#fff',
  },
  subtittleCard: {
    marginLeft: 16.5,
    fontSize: 12.667,
    color: '#fff'
  },
  cardTittleArea: {
    marginBottom: 10,
    marginTop: 10,
  },
  cardButtonArea: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 3,
  }
});
