// Questao 04 - Conversor de temperatura Celsius / Fahrenheit
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Questao04() {
  const [valor, setValor] = useState('');
  const [paraF, setParaF] = useState(true);
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  function converter() {
    const v = parseFloat(valor.replace(',', '.'));
    if (valor.trim() === '' || isNaN(v)) {
      setErro('Informe um valor numerico.');
      setResultado('');
      return;
    }
    setErro('');
    if (paraF) {
      setResultado(`${v} C = ${((v * 9) / 5 + 32).toFixed(1)} F`);
    } else {
      setResultado(`${v} F = ${(((v - 32) * 5) / 9).toFixed(1)} C`);
    }
  }

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Conversor de temperatura</Text>
      <TextInput style={s.input} placeholder="Temperatura" keyboardType="numeric" value={valor} onChangeText={setValor} />
      <Button
        title={paraF ? 'Celsius para Fahrenheit (tocar para trocar)' : 'Fahrenheit para Celsius (tocar para trocar)'}
        onPress={() => setParaF(!paraF)}
      />
      <Button title="Converter" onPress={converter} />
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
      {resultado !== '' && <Text style={s.resultado}>{resultado}</Text>}
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', gap: 10 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#999', borderRadius: 6, padding: 10 },
  resultado: { marginTop: 15, fontSize: 16 },
  erro: { marginTop: 15, fontSize: 16, color: 'red' },
  linha: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  card: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginTop: 10 },
});
