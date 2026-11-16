// Questao 01 - Calculadora de consumo diario de agua (35 mL por kg)
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  function calcular() {
    const p = parseFloat(peso.replace(',', '.'));
    if (peso.trim() === '' || isNaN(p) || p <= 0) {
      setErro('Informe um peso maior que zero.');
      setResultado('');
      return;
    }
    const litros = (p * 35) / 1000;
    setErro('');
    setResultado(`Voce deve beber cerca de ${litros.toFixed(2).replace('.', ',')} litros por dia.`);
  }

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Consumo diario de agua</Text>
      <TextInput
        style={s.input}
        placeholder="Peso em kg"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <Button title="Calcular" onPress={calcular} />
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
