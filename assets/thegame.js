//Jason Ronoastro.
//22-09-2020.The game.
//Da Vinci College. Software Developer.

    function myGame(){//Functie om de game te starten.
        const START = "start";//Een constante zodat de start van de game niet kan veranderen!

        const YES = "yes";//Een constante omdat de game alleen uit ja of nee bestaat zelfde geld voor de constante onder deze!.
        const NO = "no";
    
        var quistion;//Var voor alle vragen die ik in de levels wil stellen en dan kan ik deze variabele hele tijd veranderen.
    
        alert('Welcome by the Titanfall game');//Titel.
        alert('Jouw doel is om de eind baas titan te verslaan door jou eigen titan waar je nu in zit met wapens te bemachtigen die random de 10 levels zitten maar er zijn ook gevaren tijdens de 10 levels dus SUCCES!');//Intro voor de game.

        quistion = prompt('Ga jij je titan activeren?');//De eerste level vraag.
        if(quistion == YES){//Level 1.
            alert('Goede keus. Nu kan je door naar het volgende level');//Alert omdat het antwoord goed is. En waarom het goed is.
            quistion = quistion2 = prompt('Welkom by level 2: Je ziet een minigun op de grond liggen pak jij de minigun op?');//Vraag voor level 2.
                if(quistion2 == YES){//Level 2.
                    alert('Goed dat je de minigun hebt opgepakt zo kan jij jezelf beschermen.');//Alert omdat het antwoord goed is. En waarom het goed is.
                    
                } else {//Voor als fout geantwoord is en waarom het fout is.
                    alert('Je kan helaas niet door naar het volgende level, omdat je de mini gun nodig hebt om jezelf te beschermen.');
                }
        } else{//Voor als fout geantwoord is en waarom het fout is.
            alert('Je kan helaas niet door naar het volgende level omdat jij je titan nodig hebt!');
        }

    }

    console.log(myGame());
      











