import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  // Mengatur waktu real-time
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(timer); // Membersihkan timer saat unmount
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/Image/g1.png')} // Pastikan path gambar sesuai
          style={styles.logo}
        />
        <Text style={styles.headerText}>Selamat Datang, Guru!</Text>
        <Text style={styles.timeText}>Waktu Sekarang: {currentTime}</Text>
      </View>

      {/* Fitur Menu */}
      {/* <View style={styles.features}>
        <TouchableOpacity style={styles.featureCard}>
          <Image
            source={require('../../../assets/Image/g1.png')} // Gambar untuk fitur absensi
            style={styles.featureIcon}
          />
          <Text style={styles.featureText}>Absensi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureCard}>
          <Image
            source={require('../../../assets/Image/g1.png')} // Gambar untuk fitur guru
            style={styles.featureIcon}
          />
          <Text style={styles.featureText}>Data Guru</Text>
        </TouchableOpacity>
      </View> */}

      {/* Logout */}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  timeText: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  featureCard: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    width: '40%',
  },
  featureIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
