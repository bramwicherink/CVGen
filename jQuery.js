$(document).ready(function () {
    var max_fields = 5; // Maximaal aantal toegestane velden
    var wrapper = $(".input_fields_wrap");
    var add_button = $(".add_field_button");
    var remove_button = $(".remove_field");

    var x = 1; //initlal text box count
    var extra_id = 1;
    $(add_button).click(function (e) { //on add input button click
        e.preventDefault();

        function MoreElements() {
            if ($(add_button).click) {
                extra_id++;
                alert(extra_id);
            }
            function MoreElements() {
                if ($(add_button).click) {
                    for (extra_id = 0; extra_id < max_fields; extra_id++) {
                        $("#startdatum").attr("id", "startdatum" + extra_id);
                    }
                }
            }
        }

        if ($(remove_button).click) {
            extra_id--;
            alert(extra_id);
        }


        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            MoreElements();
            $(wrapper).append('<div class="extra-course"><br><br>' +
                '<div class="form-left">' +
                '<input class="input-field" name="mytext[]" type="text" id="naam_opleiding" value="" placeholder="Naam opleiding"><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="naam_instituut" value="" placeholder="Naam instituut" /><br>\n' +
                '</div>' +
                '<div class="form-right">' +
                '                        <input class="input-field" name="mytext[]" type="text" id="startdatum '+extra_id+' value="" placeholder="Startdatum" /><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="einddatum" value="" placeholder="Einddatum"/><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="overige_informatie"  placeholder="Overige informatie"/><br>\n' +
                '</div>' +
                '                        </select><a href="#" class=" button remove_field">Verwijder opleiding</a></div>'); // Laat de knop om te verwijderen zien


        }


        $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
        });

        $('.back').hide();

    });


});