// Questao 08 - Cadastro de estudantes em cards
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, StyleSheet } from 'react-native';

export default function App() {
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
      <Text style={s.subtitulo}>A matricula nao pode se repetir</Text>
      <TextInput style={s.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={s.input} placeholder="Matricula" value={matricula} onChangeText={setMatricula} />
      <TextInput style={s.input} placeholder="E-mail" value={email} onChangeText={setEmail} />
      <TextInput style={s.input} placeholder="Curso" value={curso} onChangeText={setCurso} />
      <Botao title="Cadastrar" onPress={cadastrar} />
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
      {lista.map((e) => (
        <View key={e.matricula} style={s.card}>
          <Text style={s.nome}>{e.nome}</Text>
          <Text style={s.rotulo}>Matricula: {e.matricula}</Text>
          <Text style={s.rotulo}>{e.email}</Text>
          <Text style={s.rotulo}>{e.curso}</Text>
          <Botao title="Remover" onPress={() => remover(e.matricula)} tipo="secundario" />
        </View>
      ))}
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
