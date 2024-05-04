var gizliNumara=15;

var kullanıcıNumara = prompt("Bir Sayı Tahmin Et");
var tahmin = Number(kullanıcıNumara);

if (gizliNumara==tahmin) {
    alert("Doğru bildiniz, gizli numara " +gizliNumara +" idi.");
} else if ( tahmin>gizliNumara ) {
    alert("Büyük numara tahmin ettin biraz düş");
} else{
alert("Küçük numara tahmin ettin biraz çık");
}
