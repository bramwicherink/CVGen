$(document).ready(function () {
    let max_fields = 5; // Maximaal aantal toegestane velden
    let wrapper = $(".input_fields_wrap");
    let add_button = $(".add_field_button");


    let x = 1; //initlal text box count
    let extra_id = 1;


    $(add_button).click(function (e) { //on add input button click
        e.preventDefault();
        extra_id++;
        alert(extra_id);

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

        if (max_fields > x) {

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
            doc.save('CV ' + voornaam + '' + achternaam + '.pdf');
        }



    });





});
