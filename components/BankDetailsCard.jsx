import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/Colors';

const BankDetailsCard = () => {
  return (
    <LinearGradient
      colors={['#170F39', '#674bcc']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.left}>
          <Text style={styles.cardTitle}>John Doe</Text>
          <Text style={styles.cardText}>Account Number: 1234567890</Text>
          <Text style={styles.cardText}>Bank Name: ABC Bank</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name={'delete-outline'} size={24} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default BankDetailsCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginTop: 16,
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#5D4B8A',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
});
