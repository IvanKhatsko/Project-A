import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Placeholder } from '@/components/Placeholder';
import { Screen } from '@/components/Screen';
import { colors, radius, spacing } from '@/constants/theme';

// Scan tab (the first tab, so it is named "index").
// Stage 4 adds the camera and gallery here.
export default function ScanScreen() {
  return (
    <Screen>
      <Placeholder
        title="Scan ingredients"
        description="Take a photo of the ingredient list on a package and we will check it against your allergens."
      />

      {/* Temporary link to check that navigation to the result screen works. */}
      <Link href="/result/demo" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Open demo result</Text>
        </Pressable>
      </Link>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});
