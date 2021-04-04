import React from 'react';
import Timeline from 'react-native-timeline-flatlist';
const MyTimeline = props => {
  const {data} = props;

  return (
    <Timeline
      data={data}
      lineColor={'#fff'}
      circleColor={'#fff'}
      iconStyle={{borderRadius: 20, height: 20, width: 20}}
      iconDefault={require('../assets/images/time.png')}
      circleSize={30}
      titleStyle={{color: '#fff', marginBottom: 10, marginTop: -5}}
      options={{
        style: {marginLeft: -50, marginTop: 10},
      }}
      innerCircle={'icon'}
    />
  );
};

export default MyTimeline;
