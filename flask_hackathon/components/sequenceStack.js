import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List,DataTable,Title,Button,Paragraph,TextInput } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,StackActions } from '@react-navigation/stack';
import { Checkbox, Header } from 'galio-framework';
import { Ionicons } from '@expo/vector-icons';
// import { Header } from 'react-native/Libraries/NewAppScreen';

const PatientScreen = ({ navigation }) => {


  
  const [expanded, setExpanded,] = React.useState(true);
  const [value,glucose] = React.useState(0);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View>
    <List.Section title="Patient List Today">
      <List.Accordion
        title="Julie Thacker"
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
      <DataTable.Cell>Julie Thacker</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.firstRow}>Address</DataTable.Cell>
      <DataTable.Cell>237 Old Tiverton      <Ionicons name='ios-arrow-dropright' size={20} color='grey'/></DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.firstRow}>Phone </DataTable.Cell>
      <DataTable.Cell>01823 8472834        <Ionicons name='ios-call' size={20} color='grey'/></DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.firstRow}>DoB</DataTable.Cell>
      <DataTable.Cell>03/06/1960 (60y/o)</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell style={styles.firstRow}>Visit Request</DataTable.Cell>
      <DataTable.Cell>Diabetic Foot Assessment</DataTable.Cell>
    </DataTable.Row>
    <Button  onPress={() => navigation.navigate('Home')} >
    Start Assessment
  </Button>
  
    {/* <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    /> */}
  </DataTable>


  
      </List.Accordion>

      <List.Accordion
        title="Louis Hamilton"
        left={props => <List.Icon {...props} icon="account" />}
        onPress={handlePress}>
      </List.Accordion>
      <List.Accordion
        title="Margret Hutchinson"
        left={props => <List.Icon {...props} icon="account" />}
        onPress={handlePress}>
      </List.Accordion>
      <List.Accordion
        title="Alexander todd"
        left={props => <List.Icon {...props} icon="account" />}
        onPress={handlePress}>
      </List.Accordion>
      <List.Accordion
        title="Lesly Sweeny"
        left={props => <List.Icon {...props} icon="account" />}
        onPress={handlePress}>
      </List.Accordion>
      <List.Accordion
        title="Richard Burton"
        left={props => <List.Icon {...props} icon="account" />}
        onPress={handlePress}>
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
function HomeScreen({ navigation }) {
  
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
<View>
<Text>Diabetic Checklist for:Diabetic Foot Assessment</Text>
<Text>Weight | Previously 85.5kg</Text>
<NumericInput 
            value={85.5} 
            onChange={value => console.log(value)}
            totalWidth={240} 
            totalHeight={50} 
            iconSize={25}
            step={0.1}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>

<Text>Blood Glucose | Previously 6.2 mmol/dl</Text>
<NumericInput 
            value={6.2} 
            onChange={value => console.log(value)}
            totalWidth={240} 
            totalHeight={50} 
            iconSize={25}
            step={0.01}
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
            <Text>Diastolic / Systolic</Text>
            <View style={{position:'relative', flexDirection: 'row'}}>
            <NumericInput 
            value={90} 
            onChange={value => console.log(value)}
            totalWidth={120} 
            totalHeight={50} 
            iconSize={25}
            step={5}
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
            <NumericInput 
            value={150} 
            onChange={value => console.log(value)}
            totalWidth={120} 
            totalHeight={50} 
            iconSize={25}
            step={5}
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
            </View>

<Text>Check all assessment components to progress to notes</Text>
        <Checkbox style={styles.Checkbox} initialValue={false}  label="Palpate peripheral pulses"></Checkbox>
        <Checkbox style={styles.Checkbox} initialValue={false} label="Check Peripheral limb sensation"></Checkbox>
        <Checkbox style={styles.Checkbox} initialValue={false} label="Check Reflexes"></Checkbox>
        <Checkbox style={styles.Checkbox} initialValue={false} label="Inspect Footware"></Checkbox>
        <Checkbox style={styles.Checkbox} initialValue={false} label="Change in vision"></Checkbox>
        <Checkbox style={styles.Checkbox} initialValue={false} label="Change in finger sense"></Checkbox>
        <Checkbox style={styles.Checkbox} initialValue={false} label="Ask about changes in vision"></Checkbox>

        <Button  onPress={() => navigation.navigate('Notifications')} >
    Write Notes
  </Button></View>
    
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Complete" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (

    <View>
  
      <Text>Appointment Notes
        </Text>
      <TextInput
      multiline='true'
    style={{ marginTop: 15 }}
    label='Appointment Notes'
    mode='outlined'
  />
  <TextInput
    style={{ marginTop: 15 }}
    label='Confirm your Name'
    mode='flat'
  />
  <Button  onPress={() => {navigation.navigate('Patients Screen');alert('Submitted Patient Appointment to EHR')}} >
    Complete Appointment
  </Button>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Patients Screen" component={PatientScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function sequenceStack() {
  return (
      <MyStack />
  );
}
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