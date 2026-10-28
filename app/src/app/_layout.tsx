import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants/theme';

// Root layout: every screen of the app lives inside this Stack navigator.
// Later stages add auth and onboarding checks here
// (Stack.Protected will hide screens until the user is signed in).
export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerTintColor: colors.text,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        {/* The tab bar is its own navigator, so we hide the Stack header for it. */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="result/[id]" options={{ title: 'Result' }} />
      </Stack>
    </>
  );
}
