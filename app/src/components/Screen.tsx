import { ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { colors, spacing } from '@/constants/theme';

// Basic scrollable screen container with consistent padding and background.
export function Screen({ children }: { children: ReactNode }) {
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md },
});
