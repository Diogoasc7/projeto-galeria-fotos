$(document).ready(function(){
    $('#formulario').on('submit', function(e){
        e.preventDefault();
        const nome = $('#nome').val().trim();
        const addLi = $('<li style="display: none;"></li>').text(nome);
        $('#listaNaoOrdenada').append(addLi);
        addLi.fadeIn();
        $('#nome').val('');
    });

    $('#listaNaoOrdenada').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
