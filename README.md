# Allergen Scanner

A mobile app that checks food ingredient labels against your allergens.
Take a photo of the ingredient list, and AI (Claude) finds the ingredients
that are dangerous for you.

> The app is a helper tool. It does not replace reading the label yourself
> or consulting a doctor.

## Project layout

| Folder      | What is inside                                          |
|-------------|---------------------------------------------------------|
| `app/`      | React Native + Expo (TypeScript) mobile app             |
| `supabase/` | Database migrations and the Edge Function for AI calls (coming in later stages) |
| `docs/`     | Setup guides and the privacy policy (coming in later stages) |

## Run the app on your phone

1. Install [Node.js](https://nodejs.org) (LTS) and the **Expo Go** app on your phone.
2. In a terminal:
   ```bash
   cd app
   npm install
   npx expo start
   ```
3. Scan the QR code with the Camera app (iOS) or with Expo Go (Android).
   Your phone and computer must be on the same Wi-Fi network.
   If that does not work, run `npx expo start --tunnel`.

## Security

The Claude API key lives **only** in Supabase secrets and is used only inside
the Edge Function. It must never appear in the app code or in this repository.
