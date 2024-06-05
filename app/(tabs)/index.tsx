import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
//import Greet from '../../components/Greet';
import pokemonList from '../../data.json'


export default function HomeScreen() {
  return (
      <View style={styles.container}>
        {/*<ScrollView style={styles.scrollView}>
        {
          pokemonList.map(pokemon => {
            return (
              <View style={styles.card} key={pokemon.id}>
                <Text style={styles.cardText}>{pokemon.type}</Text>
                <Text style={styles.cardText}>{pokemon.name}</Text>
              </View>
            )
          })}
        </ScrollView>*/}
        <View style={styles.scrollView}>
          <FlatList 
            data={pokemonList}
            renderItem={({item}) => {
              return (
                <View style={styles.card} key={item.id}>
                  <Text style={styles.cardText}>{item.type}</Text>
                  <Text style={styles.cardText}>{item.name}</Text>
                </View>
              );
            }} 
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            ListEmptyComponent={<Text>No items found</Text>}
            ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
            ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
          />
        </View>
      </View>
  )
}


//export default function HomeScreen() {

  // return (
  //   <View style={{ flex: 1, backgroundColor: "eggshell", padding: 60 }}>
  //     <Greet name="Bruce Wayne" />
  //     <Greet name="Clark Kent" />
  //   </View>
  // )
//}

// const showAlert = (message: string, description = '') => {
//   alert(description ? `${message}\n${description}` : message);
// }

// return (
//     <View style={{ flex: 1, backgroundColor: "eggshell", padding: 60 }}>
//       <Button title="Alert" onPress={() => alert("Invalid data!!")} />
//       <Button title="Alert2" onPress={() => showAlert("Invalid data!!", "DOB incorrect")} />
//     </View>
//   )

// export default function HomeScreen() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "eggshell", padding: 60 }}>
//       <ActivityIndicator />
//       <ActivityIndicator size="large" />
//       <ActivityIndicator size="large" color="midnightblue" />
//       <ActivityIndicator size="large" color="midnightblue" animating={false} />
//     </View>
//   );
// }

// export default function HomeScreen() {

//   const [isModalVisible, setIsModalVisible] = useState(false);

//   return (
//     <View style={{ flex: 1, backgroundColor: "eggshell", padding: 60 }}>
//       <Button
//         title="Press"
//         onPress={() => setIsModalVisible(true)}
//         color="black"
//         />
//         <Modal 
//           visible={isModalVisible} 
//           onRequestClose={() => setIsModalVisible(false)}
//           animationType="slide"
//           presentationStyle='pageSheet'
//         >
//           <View style={{ flex: 1, backgroundColor: "eggshell", padding: 60 }}>
//             <Text>Modal content</Text>
//             <Button 
//               title="Close" 
//               color="midnightblue" 
//               onPress={() => setIsModalVisible(false)} 
//               />
//           </View>
//         </Modal>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  scrollView: {
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    //marginBottom: 16
  },
  cardText: {
    fontSize: 30
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12
  },
});
