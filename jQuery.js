let CV = {
    opleidingen: [],
    personalia: {},
    werkervaring: []
};

function addPersonalia() {

    const velden = Array.from(document.getElementsByClassName('part-1'));
    for (const veld of velden) {
        // console.log("Dit is" + veld.value);
        CV.personalia[veld.id] = veld.value;
    }
    console.log(CV.personalia);
}

function addExperience() {
    const velden = Array.from(document.getElementsByClassName('part-2'));
    for (const veld of velden) {
        console.log("Dit is" + veld.value);
    }
}


$(document).ready(function () {

    let max_fields = 8; // Maximaal aantal toegestane velden
    let max_fields_ac = 6;
    let wrapper = $(".input_fields_wrap");
    let wrapper_ac = $(".input_fields_wrap_ac");
    let add_button = $(".add_field_button");
    let add_button_ac = $(".add_field_button_ac");

    let i;
    let x = 1; //initial text box count
    let y = 1;
    let extra_id = 1;
    let extra_id_ac = 1;


    let huidigeRijOpleidingen = 0;
    let maxRijenOpleiding = 7;

    let huidigeRijActiviteit = 0;
    let maxRijenActiviteit = 6;






    $('.add_field_button').click(function () {

        // Opleiding array aanmaken

        if (huidigeRijOpleidingen < maxRijenOpleiding) {
            let opleiding = {

                naamOpleiding: $('#naam_opleiding').val(),
                naamInstituut: $('#naam_instituut').val(),
                startdatum: $('#startdatum').val(),
                einddatum: $('#einddatum').val(),
                overigeInformatie: $('#overige_informatie').val(),
                xPosO: 110,
                yPosO: 27

            };

            // Voeg de opleiding toe
            CV.opleidingen.push(opleiding);
            huidigeRijOpleidingen++;

            toonToegevoegdeOpleiding(opleiding);
            console.log(opleiding);

            // Maak opleidingen form leeg, voor de volgende opleiding die opgevoerd kan worden
            $("#naam_opleiding").val("");
            $("#naam_instituut").val("");
            $("#startdatum").val("");
            $("#einddatum").val("");
            $("#overige_informatie").val("");
        }
        else {
            alert("Maximum aantal opleidingen bereikt");
        }
    });

    $('.add_field_button_ac').click(function () {
        console.log("Er wordt geklikt op de button");
        // Werkgever array aanmaken

        if (huidigeRijActiviteit < maxRijenActiviteit) {
            let activiteit = {

                naamActiviteit: $('#naam_ac').val(),
                naamInstantie: $('#naam_instantie_ac').val(),
                startdatum: $('#startdatum_ac').val(),
                einddatum: $('#einddatum_ac').val(),
                overigeInformatie: $('#overige_informatie_ac').val(),
                xPosA: 5,
                yPosA: 93

            };

            // Voeg de opleiding toe
            CV.werkervaring.push(activiteit);
            huidigeRijActiviteit++;

            toonToegevoegdeActiviteit(activiteit);
            console.log(activiteit);

            // Maak opleidingen form leeg, voor de volgende opleiding die opgevoerd kan worden
            $("#naam_ac").val("");
            $("#naam_instantie_ac").val("");
            $("#startdatum_ac").val("");
            $("#einddatum_ac").val("");
            $("#overige_informatie_ac").val("");
        }
        else {
            alert("Maximum aantal activiteiten/werkervaring bereikt");
        }
    });






    /**
     * Toon de nieuwe toegevoegd opleiding
     * @param opleiding  de opleiding die toegevoegd is
     */
    function toonToegevoegdeOpleiding(opleiding) { //on add input button click
        x++; //text box increment


        $(wrapper).append('<div class="extra-course"><br><br>' +
            '<div class="form-left">' +
            ' <input class="input-field" name="mytext[]" type="text" value= "' + opleiding.naamOpleiding + '" placeholder="Naam opleiding" maxlength="15"><br>\n' +
            ' <input class="input-field" name="mytext[]" type="text" value= "' + opleiding.naamInstituut + '"  placeholder="Naam instituut" maxlength="25" /><br>\n' +
            '</div>' +
            '<div class="form-right">' +
            '  <input class="input-field" name="mytext[]" type="text" value= "' + opleiding.startdatum + '"  placeholder="Startdatum" /><br>\n' +
            '  <input class="input-field" name="mytext[]" type="text" value= "' + opleiding.einddatum + '"  placeholder="Einddatum"/><br>\n' +
            '  <input class="input-field" name="mytext[]" type="text" value= "' + opleiding.overigeInformatie + '"  placeholder="Overige informatie" maxlength="30"/><br>\n' +
            '</div>' +
            '</select><a href="#" class="button remove_field">Verwijder opleiding</a></div>'); // Laat de knop om te verwijderen zien


        $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
            extra_id--;

            // Verwijder uit opleidingen  (werkt niet ???)
            CV.opleidingen.splice(huidigeRij, 1);
        });

        $('.back').hide();
    };

    function toonToegevoegdeActiviteit(activiteit) { //on add input button click

        y++; //text box increment


        $(wrapper_ac).append('<div class="extra-course-ac"><br><br>' +
            '<div class="form-left">' +
            ' <input class="input-field" name="mytext[]" type="text" value= "' + activiteit.naamActiviteit + '" placeholder="Naam activiteit" maxlength="15"><br>\n' +
            ' <input class="input-field" name="mytext[]" type="text" value= "' + activiteit.naamInstantie + '"  placeholder="Naam werkgever of instantie" maxlength="25" /><br>\n' +
            '</div>' +
            '<div class="form-right">' +
            '  <input class="input-field" name="mytext[]" type="text" value= "' + activiteit.startdatum + '"  placeholder="Startdatum" /><br>\n' +
            '  <input class="input-field" name="mytext[]" type="text" value= "' + activiteit.einddatum + '"  placeholder="Einddatum"/><br>\n' +
            '  <input class="input-field" name="mytext[]" type="text" value= "' + activiteit.overigeInformatie + '"  placeholder="Overige informatie" maxlength="30"/><br>\n' +
            '</div>' +
            '</select><a href="#" class="button remove_field">Verwijder activiteit</a></div>'); // Laat de knop om te verwijderen zien


        $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
            extra_id--;

            // Verwijder uit opleidingen  (werkt niet ???)
            CV.werkervaring.splice(huidigeRij, 1);
        });

        $('.back').hide();
    };



    $('.button-cv-maken').click(function () {
        let doc = new jsPDF();
        doc.addImage(imgData, 'PNG', 0, 0, 210, 297);
        doc.setTextColor(0.7544, 0.4035, 0.0000, 0.5529);


        let rij = CV.opleidingen[0];

        // Als het veld leeg is, dan....
        if (typeof rij !== "undefined") {
            doc.setFontSize(25);
            doc.text(40, 27, CV.personalia.voornaam);
            doc.setFontSize(10);
            doc.text(40, 32, CV.personalia.achternaam);
            doc.text(40, 37, CV.personalia.adres);
            doc.text(65, 37, CV.personalia.postcode);
            doc.text(90, 37, CV.personalia.woonplaats);
            doc.text(40, 42, CV.personalia.telefoon);
            doc.text(40, 47, CV.personalia.email);
            doc.text(40, 52, CV.personalia.geboortedatum);
            doc.text(40, 57, CV.personalia.geboorteplaats);
            doc.text(40, 62, CV.personalia.nationaliteit);


        } else {
            alert("Vul eerst de vereiste velden in!");
        }

        console.log(rij);





        let i;
        let xPosO = 110;

        let yPosO = 27;




        // Voor iedere opleiding die toegevoegd wordt, laat 16 pixels tussen de verschillende opleidingen
        for (i = 0; i < CV.opleidingen.length; i++) {
            rij = CV.opleidingen[i];

            console.log(rij.naamOpleiding[i]);
            console.log(rij.naamOpleiding);

            console.log("De xPosO is " + xPosO + "en de yPosO variabele is: " + yPosO);


            // x-coördinaat wordt bepaald door xPosO, y-coördinaat wordt gedefinieerd door yPosO
            doc.setFontSize(25);
            doc.text(xPosO, yPosO, rij.naamOpleiding);
            yPosO = yPosO + 5;

            doc.setFontSize(10);
            doc.text(xPosO, yPosO, rij.naamInstituut);
            yPosO = yPosO + 5;
            doc.text(xPosO, yPosO, rij.startdatum);
            yPosO = yPosO + 5;
            doc.text(xPosO, yPosO, rij.einddatum);
            yPosO = yPosO + 5;
            doc.text(xPosO, yPosO, rij.overigeInformatie);
            yPosO = yPosO + 16;

        }

        xPosW = 5;
        yPosW = 93;

        for (i = 0; i < CV.werkervaring.length; i++) {
            rijW = CV.werkervaring[i];

            doc.setFontSize(25);
            doc.text(xPosW, yPosW, rijW.naamActiviteit);
            yPosW = yPosW + 5;

            doc.setFontSize(10);
            doc.text(xPosW, yPosW, rijW.naamInstantie);
            yPosW = yPosW + 5;
            doc.text(xPosW, yPosW, rijW.startdatum);
            yPosW = yPosW + 5;
            doc.text(xPosW, yPosW, rijW.einddatum);
            yPosW = yPosW + 5;
            doc.text(xPosW, yPosW, rijW.overigeInformatie);
            yPosW = yPosW + 16;

        }








        doc.save('CV ' + CV.personalia.voornaam + ' ' + CV.personalia.achternaam + '.pdf');


    });

    $('.next').click(function () {
        $(this).parent().hide().next().show();//hide parent and show next
        if (huidigeRijOpleidingen < maxRijenOpleiding) {
            let opleiding = {

                naamOpleiding: $('#naam_opleiding').val(),
                naamInstituut: $('#naam_instituut').val(),
                startdatum: $('#startdatum').val(),
                einddatum: $('#einddatum').val(),
                overigeInformatie: $('#overige_informatie').val(),
                xPosO: 110,
                yPosO: 27

            };

            // Voeg de opleiding toe
            CV.opleidingen.push(opleiding);
            huidigeRijOpleidingen++;

            toonToegevoegdeOpleiding(opleiding);
            console.log(opleiding);

            // Maak opleidingen form leeg, voor de volgende opleiding die opgevoerd kan worden
            $("#naam_opleiding").val("");
            $("#naam_instituut").val("");
            $("#startdatum").val("");
            $("#einddatum").val("");
            $("#overige_informatie").val("");
        }
        else {
            alert("Maximum aantal opleidingen bereikt");
        }

        console.log(JSON.stringify(CV.opleidingen));


    });
    $('.back').click(function () {
        $(this).parent().hide().prev().show();//hide parent and show previous
    });


})
;



