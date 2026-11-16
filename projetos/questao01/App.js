// Questao 01 - Calculadora de consumo diario de agua (35 mL por kg)
import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

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
      <Text style={s.subtitulo}>Estimativa de 35 mL por quilograma</Text>
      <TextInput
        style={s.input}
        placeholder="Peso em kg"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <Botao title="Calcular" onPress={calcular} />
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
      {resultado !== '' && <Text style={s.resultado}>{resultado}</Text>}
    </View>
  );
}

function Botao({ title, onPress, tipo }) {
  const secundario = tipo === 'secundario';
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [s.botao, secundario && s.botaoSecundario, pressed && s.botaoPressionado]}
    >
      <Text style={[s.botaoTexto, secundario && s.botaoTextoSecundario]}>{title}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#F1F5F9', padding: 20, paddingTop: 56, gap: 12 },
  titulo: { fontSize: 24, fontWeight: '700', color: '#0F172A' },
  subtitulo: { fontSize: 14, color: '#64748B', marginBottom: 4 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: '#0F172A',
  },
  botao: { backgroundColor: '#2563EB', borderRadius: 10, paddingVertical: 14, alignItems: 'center' },
  botaoSecundario: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#CBD5E1' },
  botaoPressionado: { opacity: 0.8 },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: '600' },
  botaoTextoSecundario: { color: '#334155' },
  resultado: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: '#065F46',
  },
  erro: {
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    color: '#B91C1C',
  },
  card: { backgroundColor: '#fff', borderRadius: 12, borderWidth: 1, borderColor: '#E2E8F0', padding: 14, gap: 8 },
  destaque: { fontSize: 20, fontWeight: '700', color: '#0F172A' },
  rotulo: { fontSize: 14, color: '#64748B' },
  secao: { fontSize: 18, fontWeight: '700', color: '#0F172A', marginTop: 8 },
  nome: { fontSize: 16, fontWeight: '600', color: '#0F172A' },
});
