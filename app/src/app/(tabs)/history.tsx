import { Placeholder } from '@/components/Placeholder';
import { Screen } from '@/components/Screen';

// History tab. Stage 7 loads past scans from Supabase.
export default function HistoryScreen() {
  return (
    <Screen>
      <Placeholder title="History" description="Your past scans will appear here." />
    </Screen>
  );
}
