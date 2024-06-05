import { Text, View, StyleSheet, FlatList, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native';
import { useState } from 'react';
//import Greet from '../../components/Greet';
import pokemonList from '../../data.json';
import groupedPokemonList from '../../grouped-data.json'

export default function HomeScreen() {

  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={setName}
        placeholder="brian@hotmail.com"
        // autoCorrect={false}
        // autoCapitalize="none"
        // secureTextEntry
        // keyboardType="numeric" 
        />
      <TextInput 
        style={[styles.input, styles.multilineText]} 
        placeholder="message" 
        multiline 
      />
      <Text style={styles.text}>My name is {name}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch 
          value={isDarkMode} 
          onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          trackColor={{ false: "#767577", true: "lightblue"}}
          thumbColor="#f4f3f4"
           />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'eggshell',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  text: {
    fontSize: 30,
    padding: 10
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top"
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
});

// export default function HomeScreen() {
//   return (
//       <View style={styles.container}>
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
       // <View style={styles.scrollView}>
          {/*<FlatList 
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
          />*/}

//           <SectionList
//             sections={groupedPokemonList}
//             renderItem={({ item }) => {
//               return (
//                 <View style={styles.card}>
//                   <Text style={styles.cardText}>{item}</Text>
//                 </View>
//               );
//             }}
//             renderSectionHeader={({ section }) => (
//               <Text style={styles.sectionHeaderText}>{section.type}</Text>
//             )}

//             ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
//             SectionSeparatorComponent={() => <View style={{ height: 16 }} />}

//           />
//         </View>
//       </View>
//   )
// }


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
