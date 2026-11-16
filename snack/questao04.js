// Questao 04 - Conversor de temperatura Celsius / Fahrenheit
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Questao04() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  function ler() {
    const v = parseFloat(valor.replace(',', '.'));
    if (valor.trim() === '' || isNaN(v)) {
      setErro('Informe um valor numerico.');
      setResultado('');
      return null;
    }
    setErro('');
    return v;
  }

  function paraFahrenheit() {
    const v = ler();
    if (v === null) return;
    const f = (v * 9) / 5 + 32;
    setResultado(`${valor} C = ${f.toFixed(1).replace('.', ',')} F`);
  }

  function paraCelsius() {
    const v = ler();
    if (v === null) return;
    const c = ((v - 32) * 5) / 9;
    setResultado(`${valor} F = ${c.toFixed(1).replace('.', ',')} C`);
  }

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Conversor de temperatura</Text>
      <TextInput style={s.input} placeholder="Temperatura" keyboardType="numeric" value={valor} onChangeText={setValor} />
      <Button title="Celsius para Fahrenheit" onPress={paraFahrenheit} />
      <Button title="Fahrenheit para Celsius" onPress={paraCelsius} />
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
