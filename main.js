$(document).ready(function()
{
    $('#adicionar-tarefa').click(function()
    {
        adicionarTarefa();
    });
    
    $('form').submit(function(e)
    {
        e.preventDefault();
        adicionarTarefa();
    })

    function adicionarTarefa()
    {  
        var nomeTarefa = $('#nome-tarefa').val();
        var novaTarefa = $('<li></li>').text(nomeTarefa);

        if(nomeTarefa.trim() !== '')
        {
            $('#lista-tarefa').append(novaTarefa);
            $('#nome-tarefa').val('');
        }

        $(novaTarefa).click(function()
        {
            $(novaTarefa).toggleClass('riscar');
        });
    };
})

