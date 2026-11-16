// Questao 02 - Media de tres notas e situacao do aluno
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { s, Botao } from './ui';

export default function Questao02() {
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
