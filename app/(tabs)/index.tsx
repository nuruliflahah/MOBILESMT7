import React, { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import { View, Image, Text, StyleSheet } from 'react-native';

const BerandaPage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  // Update waktu secara real-time
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);

    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo Aplikasi */}
      <Image 
        source={require('../../assets/Image/g1.png')} // Ganti path ke logo guru
        style={styles.image}
      />
      <Text style={styles.title}>Absensi Guru</Text>

      {/* Waktu Real-Time */}
      <Text style={styles.time}>{currentTime}</Text>

      {/* Link ke Halaman Login */}
      <Link href="/(tabs)/home" style={styles.link}>Mulai</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#333333',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3A6BA2',
    borderRadius: 8,
  },
});

export default BerandaPage;