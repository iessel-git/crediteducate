// File: src/screens/Scenarios/Scenarios.tsx
import React from 'react';
import { View, Text, ScrollView, Button, TextInput } from 'react-native';
import Card from '../../components/ui/Card';
import { useScenariosStore } from '../../store/scenariosStore';

export default function Scenarios({ navigation }: any) {
  const scenarios = useScenariosStore((s) => s.scenarios);
  const addScenario = useScenariosStore((s) => s.addScenario);
  const updateScenario = useScenariosStore((s) => s.updateScenario);
  const removeScenario = useScenariosStore((s) => s.removeScenario);

  return (
    <ScrollView style={{ padding: 16, backgroundColor: '#f3f4f6' }}>
      {scenarios.map((s) => (
        <Card key={s.id}>
          <Text style={{ fontWeight: '700', marginBottom: 6 }}>
            {s.name}
          </Text>

          <Text style={{ marginBottom: 4 }}>Balance Adjustment:</Text>
          <TextInput
            keyboardType="numeric"
            value={String(s.balanceDelta)}
            onChangeText={(t) =>
              updateScenario(s.id, { balanceDelta: Number(t) || 0 })
            }
            style={{
              borderWidth: 1,
              borderColor: '#e5e7eb',
              padding: 8,
              borderRadius: 6,
              marginBottom: 10,
            }}
          />

          <View style={{ flexDirection: 'row' }}>
            <Button title="Remove" onPress={() => removeScenario(s.id)} />
          </View>
        </Card>
      ))}

      <Button title="Add Scenario" onPress={() => addScenario()} />
      <View style={{ height: 16 }} />
      <Button title="Back to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </ScrollView>
  );
}
