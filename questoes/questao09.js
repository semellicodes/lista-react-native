// Questao 09 - Pedido de lanchonete
import { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import s from './estilos';

const PRODUTOS = [
  { nome: 'Sanduiche', preco: 8 },
  { nome: 'Suco', preco: 5 },
  { nome: 'Salgado', preco: 6 },
  { nome: 'Cafe', preco: 3.5 },
];

export default function Questao09() {
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
        <Button key={p.nome} title={`${p.nome} - R$ ${p.preco.toFixed(2)}`} onPress={() => adicionar(p)} />
      ))}
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
      <Text style={s.titulo}>Resumo</Text>
      {itens.map((i) => (
        <View key={i.id} style={s.card}>
          <Text>
            {i.quantidade}x {i.nome} = R$ {(i.preco * i.quantidade).toFixed(2)}
          </Text>
          <Button title="Remover" onPress={() => remover(i.id)} />
        </View>
      ))}
      <Text style={s.resultado}>Total: R$ {total.toFixed(2)}</Text>
    </ScrollView>
  );
}
