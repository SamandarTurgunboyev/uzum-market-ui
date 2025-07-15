/**
 * Fayl o'lchamini format qilish uchun
 * @param bytes raqam yuborilishi kerak yoki 0
 * @returns string
 */
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bit';
  const k = 1024;
  const sizes = ['Bit', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  );
};

export default formatFileSize;
