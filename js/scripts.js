$(function(){

    let exemples = true;
    
    $('#exemples-btn').click(function(){
        if(exemples) return;
        exemples = true;

        const $btnExemples = $('#exemples-btn');
        $btnExemples.removeClass('btn-dark');
        $btnExemples.addClass(['text-white', 'btn-secondary']);
        $btnExemples.css('opacity', '');
        
        const $btnExemples2 = $('#exemples2-btn');
        $btnExemples2.removeClass(['text-white', 'btn-secondary']);
        $btnExemples2.addClass('btn-dark');
        $btnExemples2.css('opacity', '0.5');

        const $exemplesContainer = $('#exemples-container');
        $exemplesContainer.show();

        const $exemples2Container = $('#exemples2-container');
        $exemples2Container.hide();
    })

    $('#exemples2-btn').click(function(){
        if(!exemples) return;
        exemples = false;

        const $btnExemples2 = $('#exemples2-btn');
        $btnExemples2.removeClass('btn-dark');
        $btnExemples2.addClass(['text-white', 'btn-secondary']);
        $btnExemples2.css('opacity', '');

        const $btnExemples = $('#exemples-btn');
        $btnExemples.removeClass(['text-white', 'btn-secondary']);
        $btnExemples.addClass('btn-dark');
        $btnExemples.css('opacity', '0.5');

        const $exemples2Container = $('#exemples2-container');
        $exemples2Container.show();

        const $exemplesContainer = $('#exemples-container');
        $exemplesContainer.hide();
    })

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

    /* Exemple 11 */
    $('#exemple-11-btn').click(function(){
        $('#exemple-11-content').css({
            'background-color': 'grey'
        });
    });
    $('#exemple-11-reset-btn').click(function(){
        $('#exemple-11-content').css({
            'background-color': ''
        });
    });
    /* Fin Exemple 11 */

    /* Exemple 12 */
    $('#exemple-12-btn').click(function(){
        $('#exemple-12-content').show();
    });
    $('#exemple-12-reset-btn').click(function(){
        $('#exemple-12-content').hide();
    });
    /* Fin Exemple 12 */

    /* Exemple 13 */
    $('#exemple-13-btn').click(function(){
        $('#exemple-13-content').hide();
    });
    $('#exemple-13-reset-btn').click(function(){
        $('#exemple-13-content').show();
    });
    /* Fin Exemple 13 */

    /* Exemple 14 */
    $('#exemple-14-btn').click(function(){
        $('#exemple-14-content').toggle();
    });
    $('#exemple-14-reset-btn').click(function(){
        $('#exemple-14-content').show();
    });
    /* Fin Exemple 14 */

    /* Exemple 15 */
    $('#exemple-15-btn').click(function(){
        $('#exemple-15-content').parent().css({
            'background-color': 'lightblue'
        });
    });
    $('#exemple-15-reset-btn').click(function(){
        $('#exemple-15-parent').css({
            'background-color': ''
        });
    });
    /* Fin Exemple 15 */

    /* Exemple 16 */
    $('#exemple-16-btn').click(function(){
        $('#exemple-16-content').css({
            'background-color': 'yellow'
        });
    });
    $('#exemple-16-reset-btn').click(function(){
        $('#exemple-16-content').css({
            'background-color': ''
        });
    });
    /* Fin Exemple 16 */

    /* Exemple 17 */
    $('#exemple-17-btn').click(function(){
        $('#exemple-17-content').remove();
    });
    $('#exemple-17-reset-btn').click(function(){
        $('#exemple-17-parent').append('<div class="my-1 border p-5" id="exemple-17-content">Cet élément sera supprimé lorsque vous appuierez sur le bouton.</div>');
    });
    /* Fin Exemple 17 */

    /* Exemple 18 */
    $('#exemple-18-btn').click(function(){
        $('#exemple-18-content').animate({
            opacity: 0.5,
            left: "+=50"
        }, 1000);
    });
    $('#exemple-18-reset-btn').click(function(){
        $('#exemple-18-content').css({
            opacity: 1,
            left: 0
        });
    });
    /* Fin Exemple 18 */

    /* Exemple 19 */
    $('#exemple-19-btn').click(function(){
        $('#exemple-19-content').next().css({
            'background-color': 'lightgreen'
        });
    });
    $('#exemple-19-reset-btn').click(function(){
        $('#exemple19 div').css({
            'background-color': ''
        });
    });
    /* Fin Exemple 19 */

    /* Exemple 20 */
    $('#exemple-20-btn').click(function(){
        $('#exemple-20-content').prev().css({
            'background-color': 'lightcoral'
        });
    });
    $('#exemple-20-reset-btn').click(function(){
        $('#exemple20 div').css({
            'background-color': ''
        });
    });
    /* Fin Exemple 20 */


});