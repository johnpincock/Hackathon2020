import * as React from 'react';
import { List,DataTable,Title,Button,Paragraph,TextInput } from 'react-native-paper';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Accordion, Block,Checkbox } from 'galio-framework';
import sequenceStack from "../components/sequenceStack";
const PatientListScreen = ({ navigation }) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View>
    <List.Section title="Patient List">
      <List.Accordion
        title="Dorothy Parker"
        left={props => <List.Icon {...props} icon="account" />}>
        {/* <Text>
    Info
  </Text> */}
  <DataTable style={styles.datatable}>
    {/* <DataTable.Header>
      <DataTable.Title>Dessert</DataTable.Title>
      <DataTable.Title numeric>Calories</DataTable.Title>
      <DataTable.Title numeric>Fat</DataTable.Title>
    </DataTable.Header> */}

    <DataTable.Row>
      <DataTable.Cell style={styles.firstRow}>Name</DataTable.Cell>
      <DataTable.Cell>Dorothy Parker</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.firstRow}>Address</DataTable.Cell>
      <DataTable.Cell>237 Old Tiverton Road</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.firstRow}>Visit Request</DataTable.Cell>
      <DataTable.Cell>Diabetic Foot Assessment</DataTable.Cell>
    </DataTable.Row>
    {/* <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    /> */}
  </DataTable>
  <Paragraph>
    Get a monthly dose of fresh React Native Paper news straight to your mailbox. Just sign up to our newsletter and enjoy!
  </Paragraph>
  <TextInput
    style={{ marginTop: 15 }}
    label='Outlined input'
    mode='outlined'
  />
  <TextInput
    style={{ marginTop: 15 }}
    label='Flat input'
    mode='flat'
  />
        <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Home')} >
    Press me
  </Button>
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Louis Hamilton"
        left={props => <List.Icon {...props} icon="account" />}
        onPress={handlePress}>
        <Checkbox style={styles.Checkbox} initialValue={false} label="Did you complete this item? item"></Checkbox>
        <Checkbox style={styles.Checkbox} initialValue={false} label="Second item"></Checkbox>
        <Checkbox style={styles.Checkbox} initialValue={false} label="Third item"></Checkbox>
      </List.Accordion>
    </List.Section>
    <List.Section title="Completed today">
    <List.Accordion
        title="Megan Sweeney"
        left={props => <List.Icon {...props} icon="account" />}>
        <List.Item title="First item" />
        <Button
      title="Go to Megan's profile"
      
        onPress={() => navigation.navigate('Home')}
      
    />
        <List.Item title="Second item" />
      </List.Accordion>

    </List.Section>
    </View>
  );
};

export default PatientListScreen;

// import React from 'react';
// import { ScreenStackHeaderRightView } from 'react-native-screens';

// export default FlatListBasics = () => {
//     return (
      
//       <View style={styles.container}>
//         <Block style={{ height: 200 }}>
//   <Accordion dataArray={data} 
//   />
  
// </Block>
//         <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Dan'},
//             {key: 'Dominic'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//           ]}
//           renderItem={({item}) => <View style={styles.item}><Text>{item.key}
//           </Text><Checkbox style={styles.check}></Checkbox></View>}
//         />
//       </View>
//     );
// }

 
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 42
  },
  item: {
    backgroundColor: '#e3e3e3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  Checkbox:{
    right:0,
    padding: 20,
  },
  datatable:{
    left:-40,
  },
  firstRow:{
    width:100
  },
  
})
// const data = [
//   { title: "First Chapter", content: "Lorem ipsum dolor sit amet", 
//     icon: {
//       name: 'keyboard-arrow-up',
//       family: 'material',
//       size: 16,
//     } 
//  },
//   { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
//   { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
// ];