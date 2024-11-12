import React from 'react';
import { DataTable } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

interface Absensi {
  id: number;
  nama: string;
  waktu: string;
}

interface AbsensiTableProps {
  data: Absensi[];
}

const AbsensiTable: React.FC<AbsensiTableProps> = ({ data }) => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>ID</DataTable.Title>
        <DataTable.Title>Nama Guru</DataTable.Title>
        <DataTable.Title>Waktu Absensi</DataTable.Title>
      </DataTable.Header>

      {data.map((absensi) => (
        <DataTable.Row key={absensi.id}>
          <DataTable.Cell>{absensi.id}</DataTable.Cell>
          <DataTable.Cell>{absensi.nama}</DataTable.Cell>
          <DataTable.Cell>{absensi.waktu}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default AbsensiTable;
