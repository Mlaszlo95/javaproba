function addCar() {
    hideDivs();

    $('#addCarForm').show();
    $.getJSON('/manufacturerNames', function (data) {

        var selector = $('<select name="manufacturer" required></select>')
        var placeholder = $('<option value="Please select one!">Please select one!</option>');
        selector.append(placeholder);

        $.each(data, function (key, value) {
            var option = $('<option value=' + '"' + value + '">' + value + '</option>');
            selector.append(option);
        });
        $('#manufacturerSelector').html(selector);
        $('#addCar').show();
        document.getElementById("addCarForm").reset();

    })

}
