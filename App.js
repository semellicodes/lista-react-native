// Menu que abre cada questao da lista
import { useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';

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
  { numero: '01', titulo: 'Consumo de agua', componente: Questao01 },
  { numero: '02', titulo: 'Media do estudante', componente: Questao02 },
  { numero: '03', titulo: 'Controle de estoque', componente: Questao03 },
  { numero: '04', titulo: 'Conversor de temperatura', componente: Questao04 },
  { numero: '05', titulo: 'Simulador de conta', componente: Questao05 },
  { numero: '06', titulo: 'Eleicao estudantil', componente: Questao06 },
  { numero: '07', titulo: 'Calculo de desconto', componente: Questao07 },
  { numero: '08', titulo: 'Cadastro de estudantes', componente: Questao08 },
  { numero: '09', titulo: 'Pedido da lanchonete', componente: Questao09 },
];

export default function App() {
  const [atual, setAtual] = useState(null);

  if (atual !== null) {
    const Componente = QUESTOES[atual].componente;
    return (
      <View style={e.tela}>
        <Pressable onPress={() => setAtual(null)} style={e.voltar}>
          <Text style={e.voltarTexto}>Voltar ao menu</Text>
        </Pressable>
        <Componente />
      </View>
    );
  }

  return (
    <View style={e.tela}>
      <ScrollView contentContainerStyle={e.menu}>
        <Text style={e.titulo}>Lista de exercicios</Text>
        <Text style={e.subtitulo}>React Native, Sistemas de Informacao, UFRA</Text>
        {QUESTOES.map((q, i) => (
          <Pressable
            key={q.numero}
            onPress={() => setAtual(i)}
            style={({ pressed }) => [e.item, pressed && e.itemPressionado]}
          >
            <Text style={e.numero}>{q.numero}</Text>
            <Text style={e.item_titulo}>{q.titulo}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const e = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#F1F5F9', paddingTop: 48 },
  menu: { padding: 20, gap: 10 },
  titulo: { fontSize: 26, fontWeight: '700', color: '#0F172A' },
  subtitulo: { fontSize: 14, color: '#64748B', marginBottom: 10 },
  item: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  itemPressionado: { backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' },
  numero: { fontSize: 15, fontWeight: '700', color: '#2563EB', width: 26 },
  item_titulo: { fontSize: 16, color: '#0F172A', flexShrink: 1 },
  voltar: { paddingHorizontal: 20, paddingBottom: 8 },
  voltarTexto: { fontSize: 15, color: '#2563EB', fontWeight: '600' },
});
