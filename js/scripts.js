$(function(){
    /* Exemple 1 */
    $('#exemple-1-btn').click(function(){
        $('#exemple-1-content').text("Le contenu text a changé.");
    });
    $('#exemple-1-reset-btn').click(function(){
        $('#exemple-1-content').text("Lorsque vous appuyerez sur le bouton mon contenue de texte changera.");
    });
    /* Fin exemple 1 */

    /* Exemple 2 */
    $('#exemple-2-btn').click(function(){
        $('#exemple-2-content').slideUp();
    });
    $('#exemple-2-reset-btn').click(function(){
        $('#exemple-2-content').slideDown();
    });
    /* Fin exemple 2 */

    /* Exemple 3 */
    $('#exemple-3-btn').click(function(){
        $('#exemple-3-content').slideToggle();
    });
    $('#exemple-3-reset-btn').click(function(){
        $('#exemple-3-content').slideDown();
    });
    /* Fin exemple 3 */

    /* Exemple 4 */
    $('#exemple-4-btn').click(function(){
        $('#exemple-4-content').fadeIn();
    });
    $('#exemple-4-reset-btn').click(function(){
        $('#exemple-4-content').fadeOut();
    });
    /* Fin exemple 4 */

    /* Exemple 5 */
    $('#exemple-5-btn').click(function(){
        $('#exemple-5-content').fadeOut();
    });
    $('#exemple-5-reset-btn').click(function(){
        $('#exemple-5-content').fadeIn();
    });
    /* Fin exemple 5 */

    /* Exemple 6 */
    $('#exemple-6-btn').click(function(){
        $('#exemple-6-content').fadeToggle();
    });
    $('#exemple-6-reset-btn').click(function(){
        $('#exemple-6-content').fadeIn();
    });
    /* Fin exemple 6 */

    /* Exemple 7 */
    $('#exemple-7-btn').click(function(){
        $('#exemple-7-content').fadeTo(1000, 0.5);
    });
    $('#exemple-7-reset-btn').click(function(){
        $('#exemple-7-content').fadeTo(1000, 1);
    });
    /* Fin exemple 7 */

    /* Exemple 8 */
    $('#exemple-8-btn').click(function(){
        $('#exemple-8-content').prepend("<p>Texte ajouté au début.</p>");
    });
    $('#exemple-8-reset-btn').click(function(){
        $('#exemple-8-content').html("Du contenu s'ajoutera avant ce texte lorsque vous appuyerez sur le bouton.");
    });
    /* Fin exemple 8 */

    /* Exemple 9 */
    $('#exemple-9-btn').click(function(){
        $('#exemple-9-content').before("<p class='text-danger'>Texte ajouté avant.</p>");
    });
    $('#exemple-9-reset-btn').click(function(){
        $('#exemple-9-content').prev('p').remove();
    });
    /* Fin exemple 9 */

    /* Exemple 10 */
    $('#exemple-10-btn').click(function(){
        $('#exemple-10-content').after("<p class='text-danger'>Texte ajouté après.</p>");
    });
    $('#exemple-10-reset-btn').click(function(){
        $('#exemple-10-content').next('p').remove();
    });
    /* Fin exemple 10 */
});