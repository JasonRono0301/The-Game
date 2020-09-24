//Jason Ronoastro.
//22-09-2020.The game.
//Da Vinci College. Software Developer.

    function myGame(){//Functie om de game te starten. En dat zit gekoppeld aan de button in HTML.
        const START = "start";//Een constante zodat de start van de game niet kan veranderen!

        const YES = "yes";//Een constante omdat de game alleen uit ja of nee bestaat zelfde geld voor de constante onder deze!.
        const NO = "no";
    
        var quistion;//Var voor alle vragen die ik in de levels wil stellen en dan kan ik deze variabele hele tijd veranderen zie regel 19 en 22!
    
        alert('Welcome bij the Titanfall game');//Titel van de game.
        alert('Jouw doel is om de eind baas titan te verslaan door jou eigen titan waar je nu in zit met wapens te bemachtigen die random de 10 levels zitten maar er zijn ook gevaren tijdens de 10 levels dus SUCCES!');//Intro voor de game.

        quistion = prompt('Welkom bij level 1: Ga jij je titan activeren?');//Actie in level 1.
            if(quistion == YES){//If statement voor level 1.
                alert('Goede keus. Nu kan je door naar het volgende level');//Alert omdat het antwoord goed is. En waarom het goed is.
                alert('Welkom bij level 2:')//Alert voor level 2.
                quistion = quistion2 = prompt('Je ziet een minigun op de grond liggen pak jij de minigun op?');//Vraag voor level 2.
            if(quistion2 == YES){//If statement voor level 2.
                alert('Goed dat je de minigun hebt opgepakt zo kan jij jezelf beschermen. Je gaat door naar het volgende level');//Alert omdat het antwoord goed is. En waarom het goed is.
                alert('Welkom bij level 3:');//Alert voor level 3.
                alert('Hier moet je een rekensom want je reactor staat op het punt om op te blazen!');//Actie in level 3.
                quistion = quistion3 = prompt('Wat is de kwadraat van 60?');//De vraag voor level 3.
                var rekensomANT = 3600;//Variabele voor level 3 met het antwoord erin.
            if(quistion3 == rekensomANT){//If statement voor level 3.
                alert('Je hebt het goede antwoord ingetypt het verkoelingproces voor je reactor is in zijn werking');//Alert omdat het antwoord goed is. En waarom het goed is.
                alert('Type alleen 1 of 2 in bij de volgende level!');//Alert voor de gebruiker zodat diegene precies invuld van wat hier staat.
                alert('Welkom bij level 4:' );//Alert voor level 3.
                alert('Er komt een rollende steen op je af.');//Actie in level 4.
                quistion = quistion4 = prompt('1 Jump over af rollende steen of 2 Dash naar voren?');//Vraag voor level 4.
                var jump = 1;//Voor de jump keuze.
                var dash = 2;//Voor de dash keuze.
            if(quistion4 == Number(jump)){//If statement voor level 4.
                alert('Goed dat je jump over de rollende steen je gaat door naar de volgende level.');//Alert omdat het antwoord goed is. En waarom het goed is.
                alert('Welkom bij level 5:')//Alert voor level 5.
                alert('Er staan nu 3 gevaarlijke dieren voor je met metalen tanden die door je titan door kunnen bijten.');//Intro voor level 5.
                quistion = quistion5 = prompt('Schiet je ze met je mini-gun of sla je ze?');//Vraag voor level 5.
            } else{//Voor als level 4 fout is en waarom het fout is.
                    alert('Nummer 2 is fout omdat je recht op de rollende steen afgaat.');
                        };
            } else {//Voor als level 3 fout is en waarom het fout is.
                    alert('De code is fout dus je reactor is op het punt om op te blazen!');
                        };
            } else {//Voor als level 2 fout geantwoord is en waarom het fout is.
                    alert('Je kan helaas niet door naar het volgende level, omdat je de mini gun nodig hebt om jezelf te beschermen.');
                        };
            } else {//Voor als level 1 fout geantwoord is en waarom het fout is.
                    alert('Je kan helaas niet door naar het volgende level omdat jij je titan nodig hebt!');
                        };

            };//Einde van de functie.

    console.log(myGame());
      











