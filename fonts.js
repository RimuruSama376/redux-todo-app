import { useFonts } from "expo-font";
import { Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    "Inter-500": Inter_500Medium,
    "Inter-600": Inter_600SemiBold,
  });

  return fontsLoaded;
}
