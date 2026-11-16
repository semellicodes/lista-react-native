// Questao 09 - Pedido de lanchonete
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, StyleSheet } from 'react-native';

const PRODUTOS = [
  { nome: 'Sanduiche', preco: 8 },
  { nome: 'Suco', preco: 5 },
  { nome: 'Salgado', preco: 6 },
  { nome: 'Cafe', preco: 3.5 },
];

export default function App() {
  const [quantidade, setQuantidade] = useState('1');
  const [itens, setItens] = useState([]);
  const [erro, setErro] = useState('');

  function adicionar(produto) {
    const q = parseInt(quantidade);
    if (isNaN(q) || q <= 0) {
      setErro('Informe uma quantidade maior que zero.');
      return;
    }
    setErro('');
    setItens([...itens, { ...produto, quantidade: q, id: Date.now() }]);
  }

  function remover(id) {
    setItens(itens.filter((i) => i.id !== id));
  }

  const total = itens.reduce((soma, i) => soma + i.preco * i.quantidade, 0);

  return (
    <ScrollView contentContainerStyle={s.container}>
      <Text style={s.titulo}>Pedido da lanchonete</Text>
      <Text style={s.subtitulo}>Escolha a quantidade e toque no produto</Text>
      <TextInput style={s.input} placeholder="Quantidade" keyboardType="numeric" value={quantidade} onChangeText={setQuantidade} />
      {PRODUTOS.map((p) => (
        <Botao key={p.nome} title={`${p.nome} - R$ ${p.preco.toFixed(2).replace('.', ',')}`} onPress={() => adicionar(p)} tipo="secundario" />
      ))}
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
      <Text style={s.secao}>Resumo</Text>
      {itens.map((i) => (
        <View key={i.id} style={s.card}>
          <Text style={s.nome}>
            {i.quantidade}x {i.nome} = R$ {(i.preco * i.quantidade).toFixed(2).replace('.', ',')}
          </Text>
          <Botao title="Remover" onPress={() => remover(i.id)} tipo="secundario" />
        </View>
      ))}
      <Text style={s.resultado}>Total: R$ {total.toFixed(2).replace('.', ',')}</Text>
    </ScrollView>
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
