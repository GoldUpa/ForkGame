document.addEventListener('DOMContentLoaded', function() {
    // LOGO navigation (TOUJOURS en 1er - marche partout)
    const LOGO = document.getElementById('LOGO');
    if (LOGO) {
        LOGO.addEventListener('click', function() {
            window.location.href = 'ForkGame.html';
        });
    }
});



//FAQ
document.querySelectorAll(".Question").forEach(q => {
  q.addEventListener("click", () => q.nextElementSibling.classList.toggle("show"));
});

const Difficulty = document.getElementById("Difficulty");
const input = document.getElementById("Number");

if (input){

    const NumberTry = document.getElementById("Nbrtry");
    const ButonValidation = document.getElementById("btnNumber");
    const ButonRetry = document.getElementById("btnRetry");
    const NUMBERTRY = document.getElementById("TRY");

    // Focus sur le champ
    input.focus();

    // Tirage nombre aléatoire
    function RandomNUM() {
        let RandomNumberEASY = (Math.floor(Math.random()*101));
        let RandomNumberMEDUIM = (Math.floor(Math.random()*501));
        let RandomNumberHARD = (Math.floor(Math.random()*1001));
        
        console.log((RandomNumberEASY));
        console.log((RandomNumberMEDUIM));
        console.log((RandomNumberHARD));

        return { EASY: RandomNumberEASY, MEDUIM : RandomNumberMEDUIM, HARD: RandomNumberHARD };
    }

    let secretNUMBER = RandomNUM();

    //Choix de difficulté
    function Choixdifficulte() {
        const NiveauDifficulte = Difficulty.value;

        if (NiveauDifficulte == "Facile") {
            return secretNUMBER.EASY;
        } else if (NiveauDifficulte == "Normal") {
            return secretNUMBER.MEDUIM;
        } else {
            return  secretNUMBER.HARD;
        }
    }

    // Ajouter un coup
    function addTry() {

        const secretNUMBER = Choixdifficulte();
        const NOMBRE = Number(input.value);

        if (input.value === "") {
            alert('Choissisez un nombre positif entre 0 et 100');
            return;
        } else if (Difficulty.value === "Facile" && (NOMBRE < 0 || NOMBRE > 100)) {
            alert('Choissisez un nombre positif entre 0 et 100');
            return;
        } else if (Difficulty.value === "Normal" && (NOMBRE < 0 || NOMBRE > 500)) {
            alert('Choissisez un nombre positif entre 0 et 500');
            return;
        } else if (Difficulty.value === "Difficile" && (NOMBRE < 0 ||NOMBRE > 1000)) {
            alert('Choissisez un nombre positif entre 0 et 1000');
            return;
        }
        
        const li = document.createElement("li");
       
        if (NOMBRE < secretNUMBER) {
            li.textContent = NOMBRE + " - Le nombre mystère est plus grand";
            li.classList.add("adding");
            } else if(NOMBRE > secretNUMBER) {
            li.textContent = NOMBRE + " - Le nombre mystère est plus petit";
            li.classList.add("adding");
        }
        /*NumberTry.appendChild(li);*/
        NumberTry.prepend(li);
       input.value = "";
        
        
        let LISTETRY = document.querySelectorAll("#Nbrtry > li");
        if (LISTETRY.length >=1) {
            Difficulty.disabled = true; 
        }

        if (NOMBRE === secretNUMBER) {
            li.classList.add("victoire");
            li.textContent = NOMBRE + " - Ceci est bien le nombre mystère";
            document.querySelector(".victoire").style.backgroundColor = "green";
            NUMBERTRY.textContent ="Vous avez fait : " + LISTETRY.length + " essais" + "\n" + "Le nombre mystère était : " + secretNUMBER;
            document.querySelector("input").disabled = true;   
            return;
        }
       NOMBRE = "";
        return LISTETRY; 
    }

    ButonValidation.addEventListener("click",addTry);

    input.addEventListener("keydown", (Enter) => {
        if (Enter.key === "Enter") {
            addTry();
        }
    });
    ButonRetry.addEventListener("click",function() {
        document.querySelector("input").disabled = false;
        document.querySelector("#Difficulty").disabled = false;
        NumberTry.textContent = " ";
        NUMBERTRY.textContent = " ";
        secretNUMBER = RandomNUM();
    });
}