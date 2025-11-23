// File: src/screens/Learn/Learn.tsx
import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import Card from '../../components/ui/Card';

export default function Learn({ navigation }: any) {
  const lessons = [
    {
      id: 1,
      title: 'How Credit Scores Work',
      body: 'Learn about payment history, credit utilization, length of credit, mix, and inquiries.',
    },
    {
      id: 2,
      title: 'Why Utilization Matters',
      body: 'Using more than 30% of your available credit can hurt your score significantly.',
    },
    {
      id: 3,
      title: 'Building Credit for Teens',
      body: 'Understand secured cards, authorized users, and safe credit habits.',
    },
  ];

  return (
    <ScrollView style={{ padding: 16, backgroundColor: '#f3f4f6' }}>
      {lessons.map((l) => (
        <Card key={l.id}>
          <Text style={{ fontWeight: '700', fontSize: 16, marginBottom: 4 }}>
            {l.title}
          </Text>
          <Text style={{ color: '#4b5563', marginBottom: 8 }}>
            {l.body}
          </Text>
          <Button title="Read More" onPress={() => {}} />
        </Card>
      ))}

      <View style={{ height: 20 }} />
      <Button title="Back to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </ScrollView>
  );
}
