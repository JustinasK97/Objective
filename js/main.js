// let skaitytojas1 = {
//     vardas: ["Petras", "Petraitis"],
//     amzius: 42,
//     lytis: "vyras",
//     pomegiai: ["Sportuoti", "Valgyti"],
//     pristatymas: function () {
//         console.log("Tai yra "+this.vardas[0]+", jo pavardė yra "+this.vardas[1]+" jo amžius " + skaitytojas1.amzius)
//     }
// };
// skaitytojas1.amzius = 40; //priskyrimas
//
// skaitytojas1.pristatymas();
//
//
// function Knyga(pavadinimas, isbn) {
//     this.pavadinimas = pavadinimas;
//     this.isbn = isbn;
//     this.showInfo = function () {
//         return pavadinimas + isbn;
//     }
// }
//
// const knyga1 = new Knyga('JS ', '12345-GT');
// console.log(knyga1.showInfo());
// console.log(knyga1.__proto__);

function Skaitytojai(vardas, pavarde, kortelesNr, adresas, telefonas) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.kortelesNr = kortelesNr;
    this.adresas = adresas;
    this.telefonas = telefonas;
    this.showInfo = function () {
        return vardas + pavarde + kortelesNr + adresas + telefonas;
    }
    this.paimtosknygos = {};
    this.addInfo = function (pavadinimas, isbn) {
        this.paimtosknygos = pavadinimas + ' - ISBN - ' + isbn;
    }
    for (let data in this.visosKnygos) {
        console.log(this.visosKnygos[data])
    }
    this.rodytiKnygas = function () {
        for (let data in this.visosKnygso) {
            console.log('Paimtos knygos: ');
            return this.paimtosKnygos;
        }
    }
}
function Vip(vardas, pavarde, kortelesNr, adresas, telefonas, vip) {
    Skaitytojai.call(this, vardas, pavarde, kortelesNr, adresas, telefonas);
    this.vip = vip;

}

const Skaitytojas1 = new Skaitytojai ('Chuck ', 'Norris ', 1562548 , ' Kovo 11-osios g. Kaunas ', 865941258);
console.log(Skaitytojas1.showInfo());
Skaitytojas1.addInfo('Programuotojo vadovas', '145986-GL');
console.log('Paimtos Knygos:');
console.log(Skaitytojas1.rodytiKnygas());

console.log("");

const Skaitytojas2 = new Skaitytojai ('Johnny ', 'Burke ', 7594128, ' Partizanų g. Kaunas ', 864856921);
console.log(Skaitytojas2.showInfo());
Skaitytojas2.addInfo('Močiutės receptai', '145925-GL');
console.log('Paimtos Knygos:');
console.log(Skaitytojas2.rodytiKnygas());

console.log("");

const Skaitytojas3 = new Skaitytojai('Rock ', 'Brock ', 4589625, ' Laisvės al. Kaunas ', 865896215);
console.log(Skaitytojas3.showInfo());
Skaitytojas3.addInfo('Bruknių sezonas', '856925-GL');
console.log('Paimtos Knygos:');
console.log(Skaitytojas3.rodytiKnygas());
