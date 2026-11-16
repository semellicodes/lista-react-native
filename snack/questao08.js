// Questao 08 - Cadastro de estudantes em cards
import { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function Questao08() {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');
  const [lista, setLista] = useState([]);
  const [erro, setErro] = useState('');

  function cadastrar() {
    if (!nome.trim() || !matricula.trim() || !email.trim() || !curso.trim()) {
      setErro('Preencha todos os campos.');
      return;
    }
    if (lista.some((e) => e.matricula === matricula.trim())) {
      setErro('Essa matricula ja foi cadastrada.');
      return;
    }
    const estudante = { nome, matricula: matricula.trim(), email, curso };
    setLista([...lista, estudante]);
    setErro('');
    setNome('');
    setMatricula('');
    setEmail('');
    setCurso('');
  }

  function remover(matriculaRemover) {
    setLista(lista.filter((e) => e.matricula !== matriculaRemover));
  }

  return (
    <ScrollView contentContainerStyle={s.container}>
      <Text style={s.titulo}>Cadastro de estudantes</Text>
      <TextInput style={s.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={s.input} placeholder="Matricula" value={matricula} onChangeText={setMatricula} />
      <TextInput style={s.input} placeholder="E-mail" value={email} onChangeText={setEmail} />
      <TextInput style={s.input} placeholder="Curso" value={curso} onChangeText={setCurso} />
      <Button title="Cadastrar" onPress={cadastrar} />
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
      {lista.map((e) => (
        <View key={e.matricula} style={s.card}>
          <Text>{e.nome}</Text>
          <Text>Matricula: {e.matricula}</Text>
          <Text>{e.email}</Text>
          <Text>{e.curso}</Text>
          <Button title="Remover" onPress={() => remover(e.matricula)} />
        </View>
      ))}
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
