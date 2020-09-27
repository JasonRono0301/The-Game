//Jason Ronoastro.
//22-09-2020.The game.
//Da Vinci College. Software Developer.

    function myGame(){//Functie om de game te starten. En dat zit gekoppeld aan de button in HTML.
        const START = "start";//Een constante zodat de start van de game niet kan veranderen!

        const YES = "YES";//Een constante omdat de game alleen uit ja of nee bestaat zelfde geld voor de constante onder deze!.
        const NO = "NO";
    
        var quistion;//Var voor alle vragen die ik in de levels wil stellen en dan kan ik deze variabele hele tijd veranderen zie regel 19 en 22!
    
        alert('Welcome bij the Titanfall game');//Titel van de game.
        alert('Jouw doel is om de eind baas titan te verslaan door jou eigen titan waar je nu in zit met wapens te bemachtigen die random de 10 levels zitten maar er zijn ook gevaren tijdens de 10 levels dus SUCCES!');//Intro voor de game.

        quistion = prompt('Welkom bij level 1: Ga jij je titan activeren?');//Actie in level 1.
            if(quistion == YES){//If statement voor level 1.
                alert('Goede keus. Nu kan je door naar het volgende level');//Alert omdat het antwoord goed is. En waarom het goed is.
                alert('Welkom bij level 2:')//Alert voor level 2.
                    quistion2 = prompt('Je ziet een minigun op de grond liggen pak jij de minigun op?');//Actie in level 2.
            if(quistion2 != NO){//If statement voor level 2.
                YES.toUpperCase();
                NO.toUpperCase();
                alert('Goed dat je de minigun hebt opgepakt zo kan jij jezelf beschermen. Je gaat door naar het volgende level');//Alert omdat het antwoord goed is. En waarom het goed is.
                alert('Welkom bij level 3:');//Alert voor level 3.
                alert('Hier moet je een rekensom want je reactor staat op het punt om op te blazen!');//Intro in level 3.
                    quistion3 = prompt('Wat is de kwadraat van 60?');//Actie voor level 3.
                        var rekensomANT = 3600;//Variabele voor level 3 met het antwoord erin.
            if(quistion3 <= rekensomANT){//If statement voor level 3.
                alert('Je hebt het goede antwoord ingetypt het verkoelingproces voor je reactor is in zijn werking');//Alert omdat het antwoord goed is. En waarom het goed is.
                alert('Type alleen 1 of 2 in bij de volgende level!');//Alert voor de gebruiker zodat diegene precies invuld van wat hier staat.
                alert('Welkom bij level 4:' );//Alert voor level 3.
                alert('Er komt een rollende steen op je af.');//Actie in level 4.
                    quistion4 = prompt('1 Jump over af rollende steen of 2 Dash naar voren?');//Vraag voor level 4.
                        var jump = 1;//Voor de jump keuze.
                        var dash = 2;//Voor de dash keuze.
            if(quistion4 == Number(jump)){//If statement voor level 4.
                alert('Goed dat je jump over de rollende steen je gaat door naar de volgende level.');//Alert omdat het antwoord goed is. En waarom het goed is.
                alert('Welkom bij level 5:')//Alert voor level 5.
                alert('Er staan nu 3 gevaarlijke dieren voor je met metalen tanden die door je titan door kunnen bijten. Welke keuze ga je maken?');//Intro voor level 5.
                    quistion5 = prompt(' Type 1: Mini-Gun of Type 2: Vechten?');//Vraag voor level 5.
                        var minigun = Number(1) ;
                        var fight = Number(2);
            if(quistion5 == minigun){
                alert('Je hebt de goede keuze gemaakt om de mini gun te gebruiken zo kun je neerschieten. Je gaat door naar de volgende level.');//Alert omdat het antwoord goed is. En waarom het goed is.
                alert('Welkom bij level 6.');//Alert voor level 6.
                alert('Je titan zijn levensbatterij zit op 30% maar je ziet voor je een batterij op de grond voor je.');//Intro voor level 6.
                    quistion6 = prompt('Type 1 om de batterij op te pakken of 2 je gaat verder');//Vraag voor level 6.
                        var pakken = Number(1);
                        var verder = Number(2);
            if(quistion6 == Number(pakken)){
                alert('Goede keus om de batterij op te pakken nu is je titan 100%. Je gaat door naar de volgende level');
                alert('Welkom bij level 7.');
        } else{//Voor als level 6 fout geantwoord is en waarom het fout is.
                alert('Je hebt de batterij nodig!');
                    };
        } else {//Voor als level 5 fout geantwoord is en waarom het fout is.
                alert('Vechten gaat helaas niet omdat ze met 3 tal zijn en ze hebben metalen tanden en ze kunnen je makkelijk omsingelen.');
                    };
        } else{//Voor als level 4 fout geantwoord is en waarom het fout is.
                alert('Nummer 2 is fout omdat je recht op de rollende steen afgaat.');
                    };
        } else {//Voor als level 3 fout is en waarom het fout is.
                alert('Het antwoord is fout dus je reactor is op het punt om op te blazen!');
                    };
        } else {//Voor als level 2 fout geantwoord is en waarom het fout is.
                alert('Je kan helaas niet door naar het volgende level, omdat je de mini gun nodig hebt om jezelf te beschermen.');
                    };
        } else {//Voor als level 1 fout geantwoord is en waarom het fout is.
                alert('Je kan helaas niet door naar het volgende level omdat jij je titan nodig hebt!');
                    };

    };//Einde van de functie.

    console.log(myGame());
      











