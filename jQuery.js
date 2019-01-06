$(document).ready(function () {
    let max_fields = 8; // Maximaal aantal toegestane velden
    let max_fields_ac = 6;
    let wrapper = $(".input_fields_wrap");
    let add_button = $(".add_field_button");
    let add_button_ac = $(".add_field_button_ac");


    let x = 1; //initlal text box count
    let y = 1;
    let extra_id = 1;
    let extra_id_ac = 1;

    $(add_button_ac).click(function (e) {
        e.preventDefault();
        extra_id_ac++;

        if(y < max_fields_ac) {
            y++;

            $(wrapper).append('<div class="extra-course"><br><br>' +
                '<div class="form-left">' +
                '<input class="input-field" name="mytext[]" type="text" id="naam_ac' + extra_id_ac + '" value="" placeholder="Naam werkervaring of activiteit" maxlength="15"><br>\n' +
                '<input class="input-field" name="mytext[]" type="text" id="naam_instantie_ac' + extra_id_ac + '" value="" placeholder="Naam werkgever of instantie" maxlength="25" /><br>\n' +
                '</div>' +
                '<div class="form-right">' +
                '                        <input class="input-field" name="mytext[]" type="text" id="startdatum_ac' + extra_id + '" value="" placeholder="Startdatum activiteit" /><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="einddatum_ac' + extra_id + '" value="" placeholder="Einddatum activiteit"/><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="overige_informatie_ac' + extra_id + '"  placeholder="Overige informatie" maxlength="30"/><br>\n' +
                '</div>' +
                '                        </select><a href="#" class="button remove_field_ac">Verwijder activiteit</a></div>'); // Laat de knop om te verwijderen zien





        }

        $(wrapper).on("click", ".remove_field_ac", function (e) { //user click on remove text
            e.preventDefault();
            $(this).parent('div').remove();
            y--;
            extra_id_ac--;

        });
    });



    $(add_button).click(function (e) { //on add input button click
        e.preventDefault();
        extra_id++;


        if (x < max_fields) { //max input box allowed
            x++; //text box increment

            $(wrapper).append('<div class="extra-course"><br><br>' +
                '<div class="form-left">' +
                '<input class="input-field" name="mytext[]" type="text" id="naam_opleiding' + extra_id + '" value="" placeholder="Naam opleiding" maxlength="15"><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="naam_instituut' + extra_id + '" value="" placeholder="Naam instituut" maxlength="25" /><br>\n' +
                '</div>' +
                '<div class="form-right">' +
                '                        <input class="input-field" name="mytext[]" type="text" id="startdatum' + extra_id + '" value="" placeholder="Startdatum" /><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="einddatum' + extra_id + '" value="" placeholder="Einddatum"/><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="overige_informatie' + extra_id + '"  placeholder="Overige informatie" maxlength="30"/><br>\n' +
                '</div>' +
                '                        </select><a href="#" class="button remove_field">Verwijder opleiding</a></div>'); // Laat de knop om te verwijderen zien


        }



        $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
            extra_id--;

        });

        $('.back').hide();

    });

    $('.button-cv-maken').click(function() {
        let doc = new jsPDF();
        doc.addImage(imgData, 'JPEG',0,0,210,297);
        doc.setTextColor(0.7544, 0.4035, 0.0000, 0.5529);
        let voornaam = $('#voornaam').val();
        let achternaam = $('#achternaam').val();
        let adresgegevens = $('#adresgegevens').val();
        let telefoon = $('#telefoon').val();
        let email = $('#email').val();
        let geboortedatum = $('#geboortedatum').val();
        let geboorteplaats = $('#geboorteplaats').val();
        let nationaliteit = $('#nationaliteit').val();
        let naamOpleiding = $('#naam_opleiding').val();
        let naamInstituut = $('#naam_instituut').val();
        let startdatum = $('#startdatum').val();
        let einddatum = $('#einddatum').val();
        let overigeInformatie = $('#overige_informatie').val();


        let naamOpleiding2 = $('#naam_opleiding2').val();
        let naamInstituut2 = $('#naam_instituut2').val();
        let startdatum2 = $('#startdatum2').val();
        let einddatum2 = $('#einddatum2').val();
        let overigeInformatie2 = $('#overige_informatie2').val();


        let naamOpleiding3 = $('#naam_opleiding3').val();
        let naamInstituut3 = $('#naam_instituut3').val();
        let startdatum3 = $('#startdatum3').val();
        let einddatum3 = $('#einddatum3').val();
        let overigeInformatie3 = $('#overige_informatie3').val();


        let naamOpleiding4 = $('#naam_opleiding4').val();
        let naamInstituut4 = $('#naam_instituut4').val();
        let startdatum4 = $('#startdatum4').val();
        let einddatum4 = $('#einddatum4').val();
        let overigeInformatie4 = $('#overige_informatie4').val();


        let naamOpleiding5 = $('#naam_opleiding5').val();
        let naamInstituut5 = $('#naam_instituut5').val();
        let startdatum5 = $('#startdatum5').val();
        let einddatum5 = $('#einddatum5').val();
        let overigeInformatie5 = $('#overige_informatie5').val();

        let naamOpleiding6 = $('#naam_opleiding6').val();
        let naamInstituut6 = $('#naam_instituut6').val();
        let startdatum6 = $('#startdatum6').val();
        let einddatum6 = $('#einddatum6').val();
        let overigeInformatie6 = $('#overige_informatie6').val();

        let naamOpleiding7 = $('#naam_opleiding7').val();
        let naamInstituut7 = $('#naam_instituut7').val();
        let startdatum7 = $('#startdatum7').val();
        let einddatum7 = $('#einddatum7').val();
        let overigeInformatie7 = $('#overige_informatie7').val();

        let naamOpleiding8 = $('#naam_opleiding8').val();
        let naamInstituut8 = $('#naam_instituut8').val();
        let startdatum8 = $('#startdatum8').val();
        let einddatum8 = $('#einddatum8').val();
        let overigeInformatie8 = $('#overige_informatie8').val();


        if (max_fields >= x) {

            doc.text(40, 27, voornaam);
            doc.setFontSize(10);
            doc.text(40, 32, achternaam);
            doc.text(40, 37, adresgegevens);
            doc.text(40, 42, telefoon);
            doc.text(40, 47, email);
            doc.text(40, 52, geboortedatum);
            doc.text(40, 57, geboorteplaats);
            doc.text(40, 62, nationaliteit);

            doc.setFontSize(25);
            doc.text(110, 27, naamOpleiding);
            doc.setFontSize(10);
            doc.text(110, 32, naamInstituut);
            doc.text(110, 37, startdatum);
            doc.text(110, 42, einddatum);
            doc.text(110, 47, overigeInformatie);

            doc.setFontSize(25);
            doc.text(110, 60, naamOpleiding2);
            doc.setFontSize(10);
            doc.text(110, 65, naamInstituut2);
            doc.text(110, 70, startdatum2);
            doc.text(110, 75, einddatum2);
            doc.text(110, 80, overigeInformatie2);

            doc.setFontSize(25);
            doc.text(110, 93, naamOpleiding3);
            doc.setFontSize(10);
            doc.text(110, 98, naamInstituut3);
            doc.text(110, 103, startdatum3);
            doc.text(110, 108, einddatum3);
            doc.text(110, 113, overigeInformatie3);

            doc.setFontSize(25);
            doc.text(110, 126, naamOpleiding4);
            doc.setFontSize(10);
            doc.text(110, 131, naamInstituut4);
            doc.text(110, 136, startdatum4);
            doc.text(110, 141, einddatum4);
            doc.text(110, 146, overigeInformatie4);

            doc.setFontSize(25);
            doc.text(110, 159, naamOpleiding5);
            doc.setFontSize(10);
            doc.text(110, 164, naamInstituut5);
            doc.text(110, 169, startdatum5);
            doc.text(110, 174, einddatum5);
            doc.text(110, 179, overigeInformatie5);

            doc.setFontSize(25);
            doc.text(110, 192, naamOpleiding6);
            doc.setFontSize(10);
            doc.text(110, 197, naamInstituut6);
            doc.text(110, 202, startdatum6);
            doc.text(110, 207, einddatum6);
            doc.text(110, 212, overigeInformatie6);

            doc.setFontSize(25);
            doc.text(110, 225, naamOpleiding7);
            doc.setFontSize(10);
            doc.text(110, 230, naamInstituut7);
            doc.text(110, 235, startdatum7);
            doc.text(110, 240, einddatum7);
            doc.text(110, 245, overigeInformatie7);

            doc.setFontSize(25);
            doc.text(110, 258, naamOpleiding8);
            doc.setFontSize(10);
            doc.text(110, 263, naamInstituut8);
            doc.text(110, 268, startdatum8);
            doc.text(110, 273, einddatum8);
            doc.text(110, 278, overigeInformatie8);

            doc.save('CV ' + voornaam + '' + achternaam + '.pdf');
        }



    });

    $('.next').click(function(){
        $(this).parent().hide().next().show();//hide parent and show next
    });
    $('.back').click(function(){
        $(this).parent().hide().prev().show();//hide parent and show previous
    });



});
