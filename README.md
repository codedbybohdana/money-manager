# Money Manager

## Opis

Money Manager to aplikacja mobilna do prostego zarządzania finansami osobistymi. Pozwala tworzyć portfele, sprawdzać saldo, dodawać przychody i wydatki oraz edytować profil użytkownika.

---

## Główne funkcje

- Rejestracja i logowanie użytkownika (Firebase)
- Strona główna z saldem portfela
- Dodawanie przychodu i wydatku bez szczegółowych transakcji
- Zarządzanie portfelami (dodawanie, edycja, usuwanie)
- Edycja profilu użytkownika
- Wybór i przesyłanie zdjęcia (Image Picker, Cloudinary)
- Responsywny design na różne urządzenia
- Nawigacja między ekranami (expo-router)
- Przechowywanie sesji użytkownika (AsyncStorage)

---

## Architektura

- **Context API** – globalny stan użytkownika i autoryzacji
- **Firebase** – przechowywanie danych i autoryzacja
- **Expo Router** – nawigacja między ekranami
- **Cloudinary** – przechowywanie obrazów
- **Responsywność** – Flexbox, Dimensions API, własne funkcje skalowania

---

## Instalacja i uruchomienie

1. Sklonuj repozytorium:

   ```bash
   git clone <repo-url>
   cd money-manager-1
   ```

2. Zainstaluj zależności:

   ```bash
   npm install
   ```

3. Uruchom aplikację:

   ```bash
   npm start
   ```

4. Uruchom na Android/iOS:
   ```bash
   npm run android
   npm run ios
   ```

---

## Technologie

- React Native
- Expo
- TypeScript
- Firebase (Auth, Firestore)
- Cloudinary
- AsyncStorage
- expo-image-picker
- expo-router

---

## Struktura projektu

- `/app` – ekrany aplikacji (autoryzacja, zakładki, modale)
- `/components` – komponenty UI
- `/contexts` – globalne konteksty (auth)
- `/services` – obsługa Firebase, Cloudinary
- `/hooks` – własne hooki
- `/constants` – style, stałe
- `/utils` – funkcje pomocnicze

---

## Funkcje natywne

- Wybór i przesyłanie zdjęć (kamera/galeria)
- Przechowywanie sesji użytkownika (AsyncStorage)

---

## Dokumentacja kodu

- Komentarze w najważniejszych plikach
- Typy danych opisane w `types.ts`

---

## Wymagania

- Node.js >= 18
- Expo CLI

---

## Autor

Bohdana
