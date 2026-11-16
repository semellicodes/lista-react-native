// Questao 04 - Conversor de temperatura Celsius / Fahrenheit
import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function App() {
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
      <Text style={s.subtitulo}>Escolha o sentido da conversao</Text>
      <TextInput style={s.input} placeholder="Temperatura" keyboardType="numeric" value={valor} onChangeText={setValor} />
      <Botao title="Celsius para Fahrenheit" onPress={paraFahrenheit} />
      <Botao title="Fahrenheit para Celsius" onPress={paraCelsius} tipo="secundario" />
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
