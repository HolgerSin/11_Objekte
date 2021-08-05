
/***** Erinnerung: Arrays *******/
// let arr;
// arr = ["Ich","bin","Max"];
// ausgabe(arr);
// ausgabe(arr[2]);

// arr = [["Ich","bin","Max"],["Ich","bin","Moritz"]];
// ausgabe(arr[0][2]);
// ausgabe(arr[1][2]);


/***** Objekte 1 Daten/Funktionen *******/

let person = 
{
        firstName:"Maurice",
        // firstName:prompt("?"),
        familyName:"König",
        salary:[120000,160000],
        hasPermission: true,
        sayHello: 
                function(){
                        return "Hi, ich bin " + this.familyName + "!";
                }
};

// ausgabe(person);
// ausgabe(person.firstName);
// ausgabe(person.familyName);
// ausgabe(person.salary[0]);
// ausgabe(person.hasPermission);
// ausgabe(person.sayHello());

const txt =     "Ich bin " + person.firstName + " " +
                person.familyName + " und verdiene " +
                person.salary[1] + " p.a."
// ausgabe(txt);


/***** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest 
// Nested Objects : {{{{{}}}}}

let baikal = {
                wert:"10m",
                deep:{
                        deeper:{
                                deepest:"Das Licht - auf 1642m!"
                        }
                }
}

ausgabe(baikal.wert);
ausgabe(baikal.deep.deeper.deepest); // 192.188.0.1



/** Ausgabe */
function ausgabe(outputStr) {
        console.log(outputStr);
}