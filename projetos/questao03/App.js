// Questao 03 - Controle de estoque de um produto
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [produto, setProduto] = useState('');
  const [estoque, setEstoque] = useState(0);
  const [definido, setDefinido] = useState(false);
  const [inicial, setInicial] = useState('');
  const [movimento, setMovimento] = useState('');
  const [erro, setErro] = useState('');

  function definirInicial() {
    const q = parseInt(inicial);
    if (isNaN(q) || q < 0) {
      setErro('Quantidade inicial invalida.');
      return;
    }
    setErro('');
    setEstoque(q);
    setDefinido(true);
  }

  function adicionar() {
    const q = parseInt(movimento);
    if (isNaN(q) || q <= 0) {
      setErro('Informe uma quantidade maior que zero.');
      return;
    }
    setErro('');
    setEstoque(estoque + q);
  }

  function retirar() {
    const q = parseInt(movimento);
    if (isNaN(q) || q <= 0) {
      setErro('Informe uma quantidade maior que zero.');
      return;
    }
    if (q > estoque) {
      setErro('Nao e possivel retirar mais do que o disponivel.');
      return;
    }
    setErro('');
    setEstoque(estoque - q);
  }

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Controle de estoque</Text>
      <TextInput style={s.input} placeholder="Nome do produto" value={produto} onChangeText={setProduto} />
      <TextInput style={s.input} placeholder="Quantidade inicial" keyboardType="numeric" value={inicial} onChangeText={setInicial} />
      <Button title="Definir estoque inicial" onPress={definirInicial} />
      <TextInput style={s.input} placeholder="Movimentacao" keyboardType="numeric" value={movimento} onChangeText={setMovimento} />
      <View style={s.linha}>
        <Button title="Adicionar estoque" onPress={adicionar} />
        <Button title="Retirar estoque" onPress={retirar} />
      </View>
      <Text style={s.resultado}>
        {produto || 'Produto'}: {estoque} unidades
      </Text>
      {definido && estoque < 5 && <Text style={s.erro}>Alerta: estoque baixo (menos de 5 unidades).</Text>}
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
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
