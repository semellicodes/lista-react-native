// Questao 03 - Controle de estoque de um produto
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { s, Botao } from './ui';

export default function Questao03() {
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
