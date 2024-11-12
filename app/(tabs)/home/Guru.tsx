import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

interface GuruInputProps {
  onAddGuru: (nama: string, mataPelajaran: string) => void;
}

const GuruInput: React.FC<GuruInputProps> = ({ onAddGuru }) => {
  const [nama, setNama] = useState('');
  const [mataPelajaran, setMataPelajaran] = useState('');

  const handleAddGuru = () => {
    onAddGuru(nama, mataPelajaran);
    setNama('');
    setMataPelajaran('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nama Guru"
        value={nama}
        onChangeText={setNama}
        style={styles.input}
      />
      <TextInput
        label="Mata Pelajaran"
        value={mataPelajaran}
        onChangeText={setMataPelajaran}
        style={styles.input}
      />
      <Button title="Tambah Guru" onPress={handleAddGuru} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
});

export default GuruInput;
