// Questao 07 - Calculo de desconto e preco final
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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
      <TextInput style={s.input} placeholder="Nome do produto" value={produto} onChangeText={setProduto} />
      <TextInput style={s.input} placeholder="Preco original" keyboardType="numeric" value={preco} onChangeText={setPreco} />
      <TextInput style={s.input} placeholder="Desconto em %" keyboardType="numeric" value={desconto} onChangeText={setDesconto} />
      <Button title="Aplicar desconto" onPress={aplicar} />
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
