$(document).ready(function(){ // Mostrar o formulário quando o botão no header for clicado
    /*
    console.log(document.querySelector('header button'))
    console.log($('#button-cancelar'))

    document.querySelector('header button').addEventListener('click', function(){

    })
    */
        // Mostrar o formulário quando o botão no header for clicado
        $('header button').click(function() {
            $('form').slideDown();
        });
    
        // Esconder o formulário quando o botão cancelar for clicado
        $('#button-cancelar').click(function() {
            $('form').slideUp();
        });
    
        // Manipular o evento de submissão do formulário
        $('form').on('submit', function(e) {
            e.preventDefault(); // Evitar o comportamento padrão do formulário
            const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); // Obter o valor do campo de entrada
            const novoItem = $('<li style="display: none"></li>'); // Criar um novo item de lista
            $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); // Adicionar a nova imagem ao item
    
            // Adicionar o overlay com o link para ver a imagem em tamanho real
            $(`
                <div class="overlay-imagem-link">
                    <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem real</a>
                </div>
            `).appendTo(novoItem);
    
            // Adicionar o novo item à lista
            $('ul').append(novoItem);
            $(novoItem).fadeIn(1000);
    
            // Limpar o campo de entrada do formulário
            $('#endereco-imagem-nova').val('');
        });
    });
    

/*
REGRA DE USO:
Com o jQuery devidamente incluído em nosso projeto, é necessário seguir uma regra antes de usá-lo: todo código que depender do jQuery deverá estar envolvido entre a função: $(document).ready(function() { // código que depende do jQuery }); Essa função garante que utilizaremos os recursos do jQuery apenas quando todos os recursos da nossa página HTML estiverem baixados
*/

/*
SELECIONE ELEMENTOS:
O jQuery simplifica algumas tarefas básicas que realizamos com o JavaScript, como a seleção de elementos, o gerenciamento de eventos e até mesmo nos ajuda com algumas animações e efeitos básicos. Para selecionar um elemento com o jQuery escrevemos: $(“seletor”) – onde o seletor pode ser uma .classe, #ID, nome de uma tag ou consulta mais refinada como: $(“input[type=number”)
*/

/*
$(“seletor”).fadeIn( ) 
Função: Gradualmente torna um elemento visível, aumentando a opacidade de 0 a 1.      
Uso: $(“seletor”).fadeIn(duração, complete)
duração (opcional): Tempo em milissegundos ou string ("slow", "fast") que especifica a duração da animação.
complete (opcional): Função de callback a ser executada após a animação ser concluída.

fadeOut( )  
Função: Gradualmente torna um elemento invisível, diminuindo a opacidade de 1 a 0.
Uso: $(“seletor”).fadeOut(duração, complete)
duração (opcional): Tempo em milissegundos ou string ("slow", "fast") que especifica a duração da animação.
complete (opcional): Função de callback a ser executada após a animação ser concluída.

.slideUp( )   
Função: Gradualmente recolhe um elemento, diminuindo sua altura até que esteja completamente oculto.
Uso: $(“seletor”).slideUp(duração, complete)
duração (opcional): Tempo em milissegundos ou string ("slow", "fast") que especifica a duração da animação.
complete (opcional): Função de callback a ser executada após a animação ser concluída.

.slideDown( )   
Função: Gradualmente expande um elemento, aumentando sua altura até que esteja completamente visível.
Uso: $(“seletor”).slideDown(duração, complete)
duração (opcional): Tempo em milissegundos ou string ("slow", "fast") que especifica a duração da animação.
complete (opcional): Função de callback a ser executada após a animação ser concluída.

.slideToggle( )   
Função: Alterna entre slideUp e slideDown, dependendo do estado atual do elemento.
Uso: $(“seletor”).slideToggle(duração, complete)
duração (opcional): Tempo em milissegundos ou string ("slow", "fast") que especifica a duração da animação.
complete (opcional): Função de callback a ser executada após a animação ser concluída.

.show( )  
Função: Imediatamente torna um elemento visível (sem animação).
Uso: $(“seletor”).show(duração, complete)
duração (opcional): Tempo em milissegundos ou string ("slow", "fast") que especifica a duração da animação (se especificado, realiza uma animação de fadeIn).
complete (opcional): Função de callback a ser executada após a animação ser concluída.

.hide( )     
Função: Imediatamente torna um elemento invisível (sem animação).
Uso: $(“seletor”).hide(duração, complete)
duração (opcional): Tempo em milissegundos ou string ("slow", "fast") que especifica a duração da animação (se especificado, realiza uma animação de fadeOut).
complete (opcional): Função de callback a ser executada após a animação ser concluída.

.toggle( )
Função: Alterna entre show e hide, dependendo do estado atual do elemento.
Uso: $(“seletor”).toggle(duração, complete)
duração (opcional): Tempo em milissegundos ou string ("slow", "fast") que especifica a duração da animação (se especificado, realiza uma animação de fadeToggle).
complete (opcional): Função de callback a ser executada após a animação ser concluída.

- Vale ressaltar que todas as funções vistas aceitam, como parâmetro, uma duração em milissegundos para executar o efeito.
*/