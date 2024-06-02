$(document).ready(function() {
    $('#toggle-abouts').click(function() {
        $('#additional-contents').slideToggle();
        $(this).text(function(i, text) {
            return text === 'More About Me' ? 'Less About Me' : 'More About Me';
        });
        return false;
    });
});

$(document).ready(function(){
    // This code runs when the document (HTML) has finished loading

    $('.navbar-toggle').click(function(){
        // This code runs when the '.navbar-toggle' button is clicked

        console.log("Navbar toggle button clicked"); // Log a message to the console
        $('.navbar').toggleClass('active'); // Toggle the 'active' class on the '.navbar' element
    });
});
