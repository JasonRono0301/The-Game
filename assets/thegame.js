//Jason Ronoastro.
//22-09-2020.The game.
//Da Vinci College. Software Developer.

    function myGame(){//Functie om de game te starten. En dat zit gekoppeld aan de button in HTML.
        const START = "start";//Een constante zodat de start van de game niet kan veranderen!

        const YES = "yes";//Een constante omdat de game alleen uit ja of nee bestaat zelfde geld voor de constante onder deze!.
        const NO = "no";
    
        var quistion;//Var voor alle vragen die ik in de levels wil stellen en dan kan ik deze variabele hele tijd veranderen zie regel 19 en 22!
    
        alert('Welcome by the Titanfall game');//Titel.
        alert('Jouw doel is om de eind baas titan te verslaan door jou eigen titan waar je nu in zit met wapens te bemachtigen die random de 10 levels zitten maar er zijn ook gevaren tijdens de 10 levels dus SUCCES!');//Intro voor de game.

        quistion = prompt('Welkom by level 1: Ga jij je titan activeren?');//De eerste level vraag.
        if(quistion == YES){//Level 1.
            alert('Goede keus. Nu kan je door naar het volgende level');//Alert omdat het antwoord goed is. En waarom het goed is.
            quistion = quistion2 = prompt('Welkom by level 2: Je ziet een minigun op de grond liggen pak jij de minigun op?');//Vraag voor level 2.
                if(quistion2 == YES){//Level 2.
                    alert('Goed dat je de minigun hebt opgepakt zo kan jij jezelf beschermen.');//Alert omdat het antwoord goed is. En waarom het goed is.
                    quistion = quistion3 = prompt('Welkom by level 3: Je core reactor is oververhit om het af te koelen moet je de code invoeren voor de afkoeling proces.');
                        if(quistion3 ==){

                        } else{//Voor als level 3 fout is en waarom het fout is.
                            alert('De code is fout dus je reactor is op het punt om op te blazen!')
                        }
                } else {//Voor als level 2 fout geantwoord is en waarom het fout is.
                    alert('Je kan helaas niet door naar het volgende level, omdat je de mini gun nodig hebt om jezelf te beschermen.');
                }
        } else{//Voor als level 1 fout geantwoord is en waarom het fout is.
            alert('Je kan helaas niet door naar het volgende level omdat jij je titan nodig hebt!');
        }

    }

    console.log(myGame());
      











