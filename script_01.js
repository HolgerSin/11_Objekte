"use strict";

/***** Erinnerung: Arrays *******/
// let arr;
// arr = ["Ich","bin","Max"];
// ausgabe(arr[2]);

// arr = [["Ich","bin","Max"],["Ich","bin","Moritz"]];
// ausgabe(arr[0][2]);
// ausgabe(arr[1][2]);


/***** Objekte 1 Daten/Funktionen *******/


let person = 
{
        firstName: "Max",
        familyName: "Mütze",
        salary:[12000,16000],
        hasPermission: true
}

ausgabe(person);

ausgabe(person.salary[1]);
ausgabe(person.hasPermission);



/** Ausgabe */
function ausgabe(outputStr) {
        console.log(outputStr);
}