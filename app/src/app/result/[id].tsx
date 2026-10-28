import { useLocalSearchParams } from 'expo-router';
import { Placeholder } from '@/components/Placeholder';
import { Screen } from '@/components/Screen';

// Result screen. "[id]" in the file name is a dynamic route segment:
// opening /result/abc gives id = "abc". Stage 6 shows the real analysis here.
export default function ResultScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Screen>
      <Placeholder title="Scan result" description={`Scan id: ${id}`} />
    </Screen>
  );
}
