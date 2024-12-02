import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const App: React.FC = () => {
  // State untuk daftar absensi
  const [absensiList, setAbsensiList] = useState<
    { tanggal: string; idGuru: string; idPelajaran: string; status: string }[]
  >([]);

  // State untuk input data
  const [tanggal, setTanggal] = useState('');
  const [idGuru, setIdGuru] = useState('');
  const [idPelajaran, setIdPelajaran] = useState('');
  const [status, setStatus] = useState('');

  // Fungsi untuk menambah data absensi
  const handleAddAbsensi = () => {
    if (tanggal && idGuru && idPelajaran && status) {
      setAbsensiList((currentAbsensi) => [
        ...currentAbsensi,
        { tanggal, idGuru, idPelajaran, status },
      ]);
      // Reset input
      setTanggal('');
      setIdGuru('');
      setIdPelajaran('');
      setStatus('');
    } else {
      alert('Harap isi semua bidang!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Input Data Absensi */}
      <View style={styles.inputContainer}>
        <TextInput
          label="Tanggal (YYYY-MM-DD)"
          value={tanggal}
          onChangeText={setTanggal}
          style={styles.input}
        />
        <TextInput
          label="ID Guru"
          value={idGuru}
          onChangeText={setIdGuru}
          style={styles.input}
        />
        <TextInput
          label="ID Pelajaran"
          value={idPelajaran}
          onChangeText={setIdPelajaran}
          style={styles.input}
        />
        <TextInput
          label="Status (Hadir/Izin/Sakit/Tidak Hadir)"
          value={status}
          onChangeText={setStatus}
          style={styles.input}
        />
        <Button title="Tambah Absensi" onPress={handleAddAbsensi} />
      </View>

      {/* Daftar Absensi */}
      <FlatList
        data={absensiList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.absensiItem}>
            {`${item.tanggal} - Guru: ${item.idGuru} - Pelajaran: ${item.idPelajaran} - Status: ${item.status}`}
          </Text>
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  list: {
    marginTop: 20,
  },
  absensiItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;
