import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Estágio na Prodesp',
    content: 'Bom dia pessoal, venho com uma oportunidade de estágio na area de testes no Data Center da Prodesp, mais informações, mandar um email.',
    date: '24/11/20',
    img: "https://i.imgur.com/q0pVICG.jpg",
    author: 'Gustavo Patricio',
    icon: 'https://i.imgur.com/SALXaTr.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Maid Dev',
    content: 'Venha estágiar na Maid Dev e iniciar sua carreira como desenvolvedor.',
    date: '20/11/20',
    img: "https://i.imgur.com/0vjiGI1.jpg",
    author: 'Gabriel de Jesus',
    icon: 'https://i.imgur.com/V1DI4Ug.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Venha estagiar na Cisco',
    content: 'eu sou lindo',
    date: '21/11/20',
    img: "https://i.imgur.com/XMzGYDP.png",
    author: 'Cebola',
    icon: 'https://i.imgur.com/DKzJCqA.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e294543',
    title: 'Estágio na certiPROF',
    content: 'Venha atuar na area de Cyber Segurança com a possibilidade de poder gerar certificados digitais para empresas terceiras, venha atuar no mercado conosco!',
    date: '23/11/20',
    img: "https://i.imgur.com/xlpzFJx.png",
    author: 'Jadiane Pereira',
    icon: 'https://i.imgur.com/gmLyEoA.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455714219d72',
    title: 'Oportunidade de estágio na Google',
    content: 'Bom dia pessoal, tudo bom? estou aqui para apresentar a vocês uma grante oportunidade disponibilizada pela Google, de atuar na area de desenvolvimento WEB, os unicos requisitos são que você seja habilidoso em algo, até mesmo programação!',
    date: '24/11/20',
    img: "https://i.imgur.com/vqruCWV.jpg",
    author: 'Renatão Lanches',
    icon: 'https://i.imgur.com/Wo4URvU.png',
  },
];

const Item = ({ item }) => (
  <View style={styles.item}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Avatar.Image size={45} source={{ uri: item.icon }} />
      <Text style={{ margin: 8, fontSize: 20, marginRight: 80 }}>{item.author}</Text>
    </View>

    <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 10 }}>{item.title}</Text>
    <Text style={{ marginBottom: 20, marginTop: 20 }}>{item.content}</Text>
    {item.img != '#' ? <Image source={{ uri: item.img }} style={{ width: 300, height: 180, flex: 1 }} /> : null}
    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#bbbbbb', paddingHorizontal: 3, borderBottomLeftRadius: 6, borderBottomRightRadius: 6 }}>
      <Text style={{ textAlign: 'right', fontSize: 10 }}>{item.date}</Text>
    
    </View>
    <View style={{ flex: 1, flexDirection: 'row',justifyContent:'center' }}>
      <TouchableOpacity style={{
        padding: 10,
        borderRadius: 5,
        margin: 2
      }}>
        <Text style={{
          color: '#00022E',
          fontWeight: 'bold',
          letterSpacing: 2,
          fontSize: 13,
        }}>EMAIL</Text>
      </TouchableOpacity>
    </View>

  </View>
);

export default function App() {

  const renderItem = ({ item }) => (
    <Item item={item} />
  );
  const [text, setText] = React.useState('');
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.card} className="postCard">
          <View style={styles.cardTittleArea}>
            <Text style={styles.tittleCard}>Novo post</Text>
            <Text style={styles.subtittleCard}>Faça uma divulgação de algum estágio no App.</Text>
          </View>

          <Card.Content>
            <TextInput
              label="Título"
              theme={{
                colors: {
                  primary: '#FF073A',
                  underlineColor: '#3D0B1F'
                }
              }}
              value={text}
              onChangeText={text => setText(text)}

            ></TextInput>
             <TextInput
              label="Conteúdo"
              theme={{
                colors: {
                  primary: '#FF073A',
                  underlineColor: '#3D0B1F'
                }
              }}
              style={{marginTop:2}}
              value={text}
              onChangeText={text => setText(text)}

            ></TextInput>
          </Card.Content>

          <View style={styles.cardButtonArea}>
            <TouchableOpacity style={styles.touchableButton}>
              <Text style={styles.textButton}>LIMPAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableButton}>
              <Text style={styles.textButton}>POSTAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>

          <FlatList
            data={DATA}
            extraData={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  font: {
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#000557',
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#02066F',
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
    marginVertical: 5,
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
