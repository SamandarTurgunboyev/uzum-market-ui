/**
 * Format number with dot as thousands separator (e.g., 1.234.567)
 * @param amount number or numeric string
 * @returns formatted string like "1.234.567"
 */
const formatPrice = (amount: number | string): string => {
  if (!amount) return '';

  const num = Number(String(amount).replace(/\D/g, '')); // faqat raqamlar
  if (isNaN(num)) return '';

  return num.toLocaleString('de-DE'); // Nemischa format: 1.234.567
};

export default formatPrice;
