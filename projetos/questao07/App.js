// Questao 07 - Calculo de desconto e preco final
import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function App() {
  const [produto, setProduto] = useState('');
  const [preco, setPreco] = useState('');
  const [desconto, setDesconto] = useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  function aplicar() {
    const p = parseFloat(preco.replace(',', '.'));
    const d = parseFloat(desconto.replace(',', '.'));
    if (isNaN(p) || p < 0) {
      setErro('Preco invalido.');
      setResultado('');
      return;
    }
    if (isNaN(d) || d < 0 || d > 100) {
      setErro('O desconto deve estar entre 0 e 100.');
      setResultado('');
      return;
    }
    const economia = (p * d) / 100;
    setErro('');
    setResultado(
      `${produto || 'Produto'}: economia de R$ ${economia.toFixed(2).replace('.', ',')} - preco final R$ ${(p - economia).toFixed(2).replace('.', ',')}`
    );
  }

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Calculo de desconto</Text>
      <Text style={s.subtitulo}>Desconto entre 0% e 100%</Text>
      <TextInput style={s.input} placeholder="Nome do produto" value={produto} onChangeText={setProduto} />
      <TextInput style={s.input} placeholder="Preco original" keyboardType="numeric" value={preco} onChangeText={setPreco} />
      <TextInput style={s.input} placeholder="Desconto em %" keyboardType="numeric" value={desconto} onChangeText={setDesconto} />
      <Botao title="Aplicar desconto" onPress={aplicar} />
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
