import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', gap: 10 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#999', borderRadius: 6, padding: 10 },
  resultado: { marginTop: 15, fontSize: 16 },
  erro: { marginTop: 15, fontSize: 16, color: 'red' },
  linha: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  card: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginTop: 10 },
});
