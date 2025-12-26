/**
 * Formatte un nombre avec des points pour les milliers et des virgules pour les décimales
 * @param value - Le nombre à formater
 * @param decimals - Nombre de décimales à afficher (par défaut: 0)
 * @returns Le nombre formaté en chaîne de caractères
 */
export const formatNumber = (value: number, decimals: number = 0): string => {
  return value.toLocaleString('fr-FR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
    useGrouping: true
  });
};

/**
 * Formatte un montant monétaire avec le symbole FCFA
 * @param amount - Le montant à formater
 * @param decimals - Nombre de décimales à afficher (par défaut: 0)
 * @returns Le montant formaté avec le symbole FCFA
 */
export const formatCurrency = (amount: number, decimals: number = 0, number:boolean = false): string => {
  if (number) {
    return `${formatNumber(amount, decimals)}`;
  }
  return `${formatNumber(amount, decimals)} FCFA`;
};
