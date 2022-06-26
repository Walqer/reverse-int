module.exports = function reverse (n) {
  n = Math.abs(n); // Преобразуем отрицательное число
  n = n.toString(); // Преобразуем в строку
  n = n.split(''); // Преобразуем в массив
  n = n.reverse(); // Используем метод реверса массива
  n = n.join(''); // Обратко в строку
  return n;      
};
