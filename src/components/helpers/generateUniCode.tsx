export function generateUniqueCode(): string {
  const now = new Date();

  const year = now.getFullYear().toString().slice(-2);
  const month = (now.getMonth() + 1).toString().padStart(2, "0");

  const key = `code-counter-${year}${month}`;

  // Récupère le dernier compteur stocké
  let counter = Number(localStorage.getItem(key)) || 0;
  counter++;

  // Sauvegarde le nouveau compteur
  localStorage.setItem(key, counter.toString());

  const sequence = counter.toString().padStart(4, "0");

  return `${year}${month}${sequence}`;
}
