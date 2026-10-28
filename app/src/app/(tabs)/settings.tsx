import { Placeholder } from '@/components/Placeholder';
import { Screen } from '@/components/Screen';

// Settings tab. Later: edit allergens, privacy policy, sign out, delete account.
export default function SettingsScreen() {
  return (
    <Screen>
      <Placeholder
        title="Settings"
        description="Manage your allergens, read the privacy policy and manage your account."
      />
    </Screen>
  );
}
