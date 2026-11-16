// Questao 02 - Media de tres notas e situacao do aluno
import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  function calcular() {
    const notas = [n1, n2, n3].map((n) => parseFloat(n.replace(',', '.')));
    if (nome.trim() === '') {
      setErro('Informe o nome do estudante.');
      setResultado('');
      return;
    }
    if (notas.some((n) => isNaN(n) || n < 0 || n > 10)) {
      setErro('As tres notas devem estar entre 0 e 10.');
      setResultado('');
      return;
    }
    const media = (notas[0] + notas[1] + notas[2]) / 3;
    const situacao = media >= 7 ? 'Aprovado' : 'Reprovado';
    setErro('');
    setResultado(`${nome}: media ${media.toFixed(1).replace('.', ',')} - ${situacao}`);
  }

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Media do estudante</Text>
      <Text style={s.subtitulo}>Aprovado com media sete ou mais</Text>
      <TextInput style={s.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={s.input} placeholder="Nota 1" keyboardType="numeric" value={n1} onChangeText={setN1} />
      <TextInput style={s.input} placeholder="Nota 2" keyboardType="numeric" value={n2} onChangeText={setN2} />
      <TextInput style={s.input} placeholder="Nota 3" keyboardType="numeric" value={n3} onChangeText={setN3} />
      <Botao title="Calcular media" onPress={calcular} />
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
