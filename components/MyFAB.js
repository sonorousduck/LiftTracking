import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const MyFAB = () => (
  <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#38557D',
    color: '#C8C8CF',
  },
})

export default MyFAB;