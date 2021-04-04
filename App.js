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
    name: 'Krishna',
    age: 40,
    time: '12.00 PM',
  },
  {
    name: 'Kumar',
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
          labelThree={'Time'}
          valueThree={time}
        />
      ),
    };
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'blue'} />
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <ScrollView
          style={{marginHorizontal: 15}}
          showsVerticalScrollIndicator={false}>
          <Text style={style.title}>Appointment List</Text>
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
