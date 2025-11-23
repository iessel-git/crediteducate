// File: src/screens/Dashboard/Dashboard.tsx
import React, { useMemo } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { useAccountsStore } from '../../store/accountsStore';
import Card from '../../components/ui/Card';
import { estimateScores } from '../../estimator/scoreEngine';

export default function Dashboard({ navigation }: any) {
  const accounts = useAccountsStore((s) => s.accounts);
  const inquiries = useAccountsStore((s) => s.inquiries);

  const estimates = useMemo(
    () => estimateScores(accounts, inquiries),
    [accounts, inquiries]
  );

  return (
    <ScrollView style={{ padding: 16, backgroundColor: '#f3f4f6' }}>
      <View style={{ marginBottom: 8 }}>
        <Button title="Accounts" onPress={() => navigation.navigate('Accounts')} />
      </View>

      <Card>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 6 }}>
          Summary
        </Text>

        {Object.entries(estimates).map(([bureau, data]) => (
          <View key={bureau} style={{ marginBottom: 8 }}>
            <Text style={{ fontWeight: '700' }}>{bureau}</Text>
            <Text>
              Score: {data.score}  • Range: {data.range[0]} - {data.range[1]}
            </Text>
            <Text style={{ color: '#6b7280' }}>
              Utilization: {data.breakdown.utilization}%
            </Text>
          </View>
        ))}
      </Card>

      <Card>
        <Text style={{ fontWeight: '700', marginBottom: 8 }}>Quick Tips</Text>
        <Text>- Keep utilization below ~30% for best impact.</Text>
        <Text>- Payment history matters most — avoid missed payments.</Text>
      </Card>

      <View style={{ height: 40 }} />
      <Button title="Scenarios" onPress={() => navigation.navigate('Scenarios')} />
      <View style={{ height: 8 }} />
      <Button title="Learn" onPress={() => navigation.navigate('Learn')} />
    </ScrollView>
  );
}
