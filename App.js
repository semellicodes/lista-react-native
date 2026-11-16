// Menu simples para abrir cada questao da lista
import { useState } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

import Questao01 from './questoes/questao01';
import Questao02 from './questoes/questao02';
import Questao03 from './questoes/questao03';
import Questao04 from './questoes/questao04';
import Questao05 from './questoes/questao05';
import Questao06 from './questoes/questao06';
import Questao07 from './questoes/questao07';
import Questao08 from './questoes/questao08';
import Questao09 from './questoes/questao09';

const QUESTOES = [
  { titulo: '01 - Consumo de agua', componente: Questao01 },
  { titulo: '02 - Media do estudante', componente: Questao02 },
  { titulo: '03 - Controle de estoque', componente: Questao03 },
  { titulo: '04 - Conversor de temperatura', componente: Questao04 },
  { titulo: '05 - Simulador de conta', componente: Questao05 },
  { titulo: '06 - Eleicao estudantil', componente: Questao06 },
  { titulo: '07 - Calculo de desconto', componente: Questao07 },
  { titulo: '08 - Cadastro de estudantes', componente: Questao08 },
  { titulo: '09 - Pedido da lanchonete', componente: Questao09 },
];

export default function App() {
  const [atual, setAtual] = useState(null);

  if (atual !== null) {
    const Componente = QUESTOES[atual].componente;
    return (
      <SafeAreaView style={estilos.tela}>
        <View style={estilos.topo}>
          <Button title="Voltar ao menu" onPress={() => setAtual(null)} />
        </View>
        <Componente />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={estilos.tela}>
      <ScrollView contentContainerStyle={estilos.menu}>
        <Text style={estilos.titulo}>Lista de exercicios - React Native</Text>
        {QUESTOES.map((q, i) => (
          <Button key={q.titulo} title={q.titulo} onPress={() => setAtual(i)} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#fff', paddingTop: 30 },
  menu: { padding: 20, gap: 10 },
  topo: { padding: 10 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
