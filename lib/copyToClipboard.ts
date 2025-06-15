import { toast } from "sonner";

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Texte copié dans le presse-papiers !");
  } catch (err) {
    toast.error("Échec de la copie : " + (err as Error).message);
  }
};
