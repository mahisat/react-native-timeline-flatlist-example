import React from 'react';
import {MyTimeline, MyTimelineDescription} from './src/components';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import moment from 'moment';
const dummyData = [
  {
    name: 'Mahi',
    age: 25,
    time: '11.00 AM',
  },
  {
    name: 'Sathish',
    age: 25,
    time: '11.30 AM',
  },
  {
    name: 'Kumar',
    age: 23,
    time: '12.00 PM',
  },
  {
    name: 'Krishna',
    age: 25,
    time: '12.30 PM',
  },
];
const App = () => {
  const Data = dummyData.map(item => {
    const {name, age, time} = item;
    return {
      title: moment().format('MMM DD').toUpperCase(),
      description: (
        <MyTimelineDescription
          labelOne={'Name'}
          valueOne={name}
          labelTwo={'Age'}
          valueTwo={age}
          labelThree={'Appointment Time'}
          valueThree={time}
        />
      ),
    };
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'blue'} />
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <ScrollView style={{marginHorizontal: 15}}>
          <Text style={style.title}>Appointments List</Text>
          <MyTimeline data={Data} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
