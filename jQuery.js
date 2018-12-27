$(document).ready(function() {
    var max_fields      = 5; // Maximaal aantal toegestane velden
    var wrapper   		= $(".input_fields_wrap");
    var add_button      = $(".add_field_button");

    var x = 1; //initial text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><br><br>' +
                '<input class="input-field" name="mytext[]" type="text" id="naam_opleiding" value="" placeholder="Naam opleiding"><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="naam_instituut2" value="" placeholder="Naam instituut" /><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="startdatum2" value="" placeholder="Startdatum" /><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="einddatum2" value="" placeholder="Einddatum"/><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="overige_informatie2"  placeholder="Overige informatie"/><br>\n' +
                '                        <a href="#" class="remove_field">Verwijder opleiding</a></div>'); //add input box


        }
        $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
            e.preventDefault(); $(this).parent('div').remove(); x--;
        })
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






        doc.text(40, 27, voornaam);
        doc.setFontSize(10);


        doc.text(40, 32, achternaam);
        doc.text(40, 37, adresgegevens);
        doc.text(40, 42, telefoon);
        doc.text(40, 47, email);
        doc.text(40, 52, geboortedatum);
        doc.text(40, 57, geboorteplaats);
        doc.text(40, 67, nationaliteit);


        doc.setFontSize(25);
        doc.text(110, 27, naamOpleiding);
        doc.setFontSize(10);
        doc.text(110, 32, naamInstituut);
        doc.text(110, 37, startdatum);
        doc.text(110, 42, einddatum);
        doc.text(110, 47, overigeInformatie);







        doc.save('CV ' + voornaam + ' ' + achternaam + '.pdf');





    });


});

$('.next').click(function(){

    $(this).parent().hide().next().show();//hide parent and show next
});

$('.back').click(function(){
    $(this).parent().hide().prev().show();//hide parent and show previous
});

