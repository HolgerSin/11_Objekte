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
        firstName: "Maurice",
        // firstName: prompt("?"),
        familyName: "König",
        salary:[12000,16000],
        hasPermission: true,
        sayHello:
                function () {
                        return "Hi, ich bin " + this.firstName + "!";
                        
                } 
}

// ausgabe(person);
// ausgabe(person.salary[1]);
// ausgabe(person.hasPermission);
// ausgabe(person.sayHello());


let baikal = {
        wert:"10m",
        deep:{
                deeper:{
                        deepest:"Das Licht"
                }
                
                
        }
}

ausgabe(baikal.wert);
ausgabe(baikal.wert);



/** Ausgabe */
function ausgabe(outputStr) {
        console.log(outputStr);
}