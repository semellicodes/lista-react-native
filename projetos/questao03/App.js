// Questao 03 - Controle de estoque de um produto
import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

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
      <Text style={s.subtitulo}>Acompanhe as entradas e saidas de um produto</Text>
      <TextInput style={s.input} placeholder="Nome do produto" value={produto} onChangeText={setProduto} />
      <TextInput
        style={s.input}
        placeholder="Quantidade inicial"
        keyboardType="numeric"
        value={inicial}
        onChangeText={setInicial}
      />
      <Botao title="Definir estoque inicial" onPress={definirInicial} tipo="secundario" />
      <TextInput
        style={s.input}
        placeholder="Movimentacao"
        keyboardType="numeric"
        value={movimento}
        onChangeText={setMovimento}
      />
      <Botao title="Adicionar estoque" onPress={adicionar} />
      <Botao title="Retirar estoque" onPress={retirar} tipo="secundario" />
      <View style={s.card}>
        <Text style={s.rotulo}>{produto || 'Produto'}</Text>
        <Text style={s.destaque}>{estoque} unidades</Text>
      </View>
      {definido && estoque < 5 && <Text style={s.erro}>Alerta: estoque baixo, restam menos de cinco unidades.</Text>}
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
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
