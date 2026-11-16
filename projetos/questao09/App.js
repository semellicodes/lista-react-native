// Questao 09 - Pedido de lanchonete
import { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

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
      <TextInput style={s.input} placeholder="Quantidade" keyboardType="numeric" value={quantidade} onChangeText={setQuantidade} />
      {PRODUTOS.map((p) => (
        <Button key={p.nome} title={`${p.nome} - R$ ${p.preco.toFixed(2).replace('.', ',')}`} onPress={() => adicionar(p)} />
      ))}
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
      <Text style={s.titulo}>Resumo</Text>
      {itens.map((i) => (
        <View key={i.id} style={s.card}>
          <Text>
            {i.quantidade}x {i.nome} = R$ {(i.preco * i.quantidade).toFixed(2).replace('.', ',')}
          </Text>
          <Button title="Remover" onPress={() => remover(i.id)} />
        </View>
      ))}
      <Text style={s.resultado}>Total: R$ {total.toFixed(2).replace('.', ',')}</Text>
    </ScrollView>
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
