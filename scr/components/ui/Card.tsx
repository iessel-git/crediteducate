// File: src/components/ui/Card.tsx
import React from 'react';
import { View, ViewProps } from 'react-native';

export default function Card({ children, ...props }: React.PropsWithChildren<ViewProps>) {
  return (
    <View style={{ padding: 12, borderRadius: 10, backgroundColor: '#fff', marginBottom: 10, ...((props.style as any) || {}) }}>
      {children}
    </View>
  );
}
