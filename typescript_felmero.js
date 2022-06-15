// Készítsen egy függvényt három paraméterrel [nev:szoveg], [csoport:szam] és [típus:bool]
// A név változót egy az egyben adja vissza a stringben, a csoport változót fűzze hozzű kiegészítve írassa 
// ki írja elé a „Team” kifejezést, a bool változó [true] esetén a „Junior Frontend” [false] esetén a 
// „Webprogramozó” szöveg jelenjen meg a függvény által.
// Kipróbálásra: DiakInfo(„Minta Márton”, 8, true);
// Visszatérési érték[string]: Minta Márton [Team08] – Junior Frontend
// (Megjegyzés, a szavak közötti távolság egy szóköz!)
function DiakInfo(nev, csoport, tipus) {
    var kiirandoSzoveg = nev + " [Team" + csoport + "] " + " - " + (tipus ? "Junior Frontend" : "Webprogramozó");
    return kiirandoSzoveg;
}
document.write("1. feladat: " + DiakInfo("Minta Márton", 8, true));
// Készíts egy függvényt, ami bemeneti paraméternek vár egy számot [jegy], ami visszatért két értékkel, 
// az adott bemeneti paraméter szöveges értékelésével, 2 PARAMÉTERREL! (Használj Tuple-t)
// Segítség a szöveges visszatérési értékekhez
// Jegy Szorgalom Magatartás
// 5 Példás Példás
// 4 Jó Jó
// 3 Változó Változó
// 2 Hanyag Rossz
// Kipróbálásra: ;
// Visszatérési érték[string] tuple: [Hanyag,Rossz]
function SzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return ["Példás", "Példás"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 3) {
        return ["Változó", "Változó"];
    }
    else if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
    else {
        return ["Hibás jegy megadás", "Hibás jegy megadás"];
    }
}
document.write("<hr>2. feladat: " + SzovegesErtekeles(2));
// 3. feladat – Hárommal oszható számok listája [HarommalOszthatokSzama]
// Készíts egy tömb bemeneti paraméterrel rendelkező függvényt, ami visszaadja a tömbben lévő 
// hárommal osztható számok mennyiségét.
// Kipróbálásra: HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20 ]);
// Visszatérési érték[number]: 4
function HarommalOszthatokSzama(tomb) {
    var harommalOszthatoSzamokMennyisege = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            harommalOszthatoSzamokMennyisege += 1;
        }
    }
    return harommalOszthatoSzamokMennyisege;
}
var tomb = [10, 23, 12, 24, 31, 33, 42, 20];
document.write("<hr>3. feladat megoldása a [10, 23, 12, 24, 31, 33, 42, 20 ] tömbre: " + HarommalOszthatokSzama(tomb));
// 4. feladat – Nyerőszám sorsoló [Nyeroszamok]
// Készítsen egy függvényt háromparaméterrel [mennyiseg], [alsoHatar] és [felsoHatar], oldja meg 
// hogy kigeneráljon adott mennyiségű számot az alsó és a felső határon belül, és azokban, NE LEGYEN 
// ISMÉTLŐDÉS!
// Kipróbálásra: Nyeroszamok(5,1,90);
// Visszatérési érték[Array]: adott intervallumban lévő számok ismétlés nélkül!
function Nyeroszamok(mennyiseg, alsohatar, felsohatar) {
    var ellenorzesEredmenye = true;
    var generaltNyeroszamok = [];
    do {
        generaltNyeroszamok = TombGeneraloKomponens(alsohatar, felsohatar, mennyiseg);
        //Ellenőrzés
        for (var i = 0; i < generaltNyeroszamok.length; i++) {
            for (var j = i + 1; j < generaltNyeroszamok.length; j++) {
                if (generaltNyeroszamok[i] == generaltNyeroszamok[j]) {
                    ellenorzesEredmenye = false;
                }
            }
        }
        console.log(ellenorzesEredmenye);
    } while (ellenorzesEredmenye = false);
    return generaltNyeroszamok;
}
function TombGeneraloKomponens(alsoHatar, felsoHatar, tombMeret) {
    var generaltTomb = [];
    for (var i = 0; i < tombMeret; i++) {
        var tombErtek = Math.round((Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
        generaltTomb.push(tombErtek);
    }
    console.log(generaltTomb);
    return generaltTomb;
}
document.write("<hr>A 4. feladat megoldása: " + Nyeroszamok(5, 1, 90));
