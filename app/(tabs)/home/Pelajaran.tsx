import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const Pelajaran: React.FC = () => {
  // State untuk daftar pelajaran
  const [pelajaranList, setPelajaranList] = useState<
    { id: string; namaPelajaran: string; guruPengampu: string }[

    ]
  >([
    
  ]);

  // State untuk input data pelajaran
  const [idPelajaran, setIdPelajaran] = useState('');
  const [namaPelajaran, setNamaPelajaran] = useState('');
  const [guruPengampu, setGuruPengampu] = useState('');

  // Fungsi untuk menambah data pelajaran
  const handleAddPelajaran = () => {
    if (idPelajaran && namaPelajaran && guruPengampu) {
      setPelajaranList((currentList) => [
        ...currentList,
        { id: idPelajaran, namaPelajaran, guruPengampu },
      ]);
      // Reset input
      setIdPelajaran('');
      setNamaPelajaran('');
      setGuruPengampu('');
    } else {
      alert('Harap isi semua bidang!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Input Data Pelajaran */}
      <View style={styles.inputContainer}>
        <TextInput
          label="ID Pelajaran"
          value={idPelajaran}
          onChangeText={setIdPelajaran}
          style={styles.input}
        />
        <TextInput
          label="Nama Pelajaran"
          value={namaPelajaran}
          onChangeText={setNamaPelajaran}
          style={styles.input}
        />
        <TextInput
          label="Guru Pengampu"
          value={guruPengampu}
          onChangeText={setGuruPengampu}
          style={styles.input}
        />
        <Button title="Tambah Pelajaran" onPress={handleAddPelajaran} />
      </View>

      {/* Daftar Pelajaran */}
      <FlatList
        data={pelajaranList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.pelajaranItem}>
            {`ID: ${item.id} - Nama: ${item.namaPelajaran} - Guru: ${item.guruPengampu}`}
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
  pelajaranItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Pelajaran;
