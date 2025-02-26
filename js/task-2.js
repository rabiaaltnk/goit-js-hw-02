"use strict";

function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    //Dize uzunluğu maxLength'e eşit veya daha kısa ise, işlev değişiklik yapmadan orijinal diziyi döndürür.
    return message;
  } else {
    // Eğer uzunluk maxLength'i aşıyorsa, işlev diziyi maxLength karaktere kadar kısaltır, sonuna üç nokta "..." ekler ve kısaltılmış versiyonu döndürür.
    return message.slice(0, maxLength) + "...";
  }
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"