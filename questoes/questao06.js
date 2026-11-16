// Questao 06 - Urna com tres candidatos ficticios
import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import s from './estilos';

export default function Questao06() {
  const [votos, setVotos] = useState([0, 0, 0]);
  const nomes = ['Ana', 'Bruno', 'Carla'];

  function votar(i) {
    const novos = [...votos];
    novos[i] = novos[i] + 1;
    setVotos(novos);
  }

  const total = votos[0] + votos[1] + votos[2];
  const maior = Math.max(...votos);
  const lideres = nomes.filter((n, i) => votos[i] === maior && maior > 0);

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Eleicao estudantil</Text>
      {nomes.map((nome, i) => (
        <View key={nome} style={s.linha}>
          <Button title={`Votar em ${nome}`} onPress={() => votar(i)} />
          <Text>{votos[i]} votos</Text>
        </View>
      ))}
      <Text style={s.resultado}>Total de votos: {total}</Text>
      {total > 0 && (
        <Text style={s.resultado}>
          {lideres.length > 1
            ? `Empate na lideranca entre ${lideres.join(' e ')} com ${maior} votos.`
            : `Mais votado: ${lideres[0]} com ${maior} votos.`}
        </Text>
      )}
    </View>
  );
}
