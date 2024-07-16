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



Seletores
$(): A função principal do jQuery para selecionar elementos do DOM.
Exemplo: $('p') - Seleciona todos os parágrafos.



Manipulação de Elementos
.html(): Obtém ou define o conteúdo HTML de um elemento.
Exemplo: $('#elemento').html('<p>Novo conteúdo</p>').

.text(): Obtém ou define o conteúdo de texto de um elemento.
Exemplo: $('#elemento').text('Novo texto').

.val(): Obtém ou define o valor de um campo de formulário.
Exemplo: $('#input').val('Novo valor').

.attr(): Obtém ou define atributos de um elemento.
Exemplo: $('#link').attr('href', 'https://example.com').

.css(): Obtém ou define propriedades CSS de um elemento.
Exemplo: $('#elemento').css('color', 'red').



Manipulação de Eventos
.on(): Anexa manipuladores de eventos a elementos.
Exemplo: $('#botao').on('click', function() { alert('Clicado!'); }).

.click(): Atalho para anexar um manipulador de evento de clique.
Exemplo: $('#botao').click(function() { alert('Clicado!'); }).



Efeitos e Animações
.hide(): Oculta um elemento.
Exemplo: $('#elemento').hide().

.show(): Mostra um elemento oculto.
Exemplo: $('#elemento').show().

.fadeIn(): Gradualmente mostra um elemento, aumentando a opacidade.
Exemplo: $('#elemento').fadeIn().

.fadeOut(): Gradualmente oculta um elemento, diminuindo a opacidade.
Exemplo: $('#elemento').fadeOut().

.slideUp(): Recolhe um elemento até que esteja oculto.
Exemplo: $('#elemento').slideUp().

.slideDown(): Expande um elemento até que esteja visível.
Exemplo: $('#elemento').slideDown().

.toggle(): Alterna entre mostrar e esconder um elemento.
Exemplo: $('#elemento').toggle().



Manipulação do DOM
.append(): Insere conteúdo no final dos elementos selecionados.
Exemplo: $('#lista').append('<li>Novo item</li>').

.prepend(): Insere conteúdo no início dos elementos selecionados.
Exemplo: $('#lista').prepend('<li>Novo item</li>').

.after(): Insere conteúdo após os elementos selecionados.
Exemplo: $('#elemento').after('<p>Depois do elemento</p>').

.before(): Insere conteúdo antes dos elementos selecionados.
Exemplo: $('#elemento').before('<p>Antes do elemento</p>').

.remove(): Remove os elementos selecionados do DOM.
Exemplo: $('#elemento').remove().

.empty(): Remove todos os filhos dos elementos selecionados.
Exemplo: $('#elemento').empty().



Manipulação de Classes
.addClass(): Adiciona uma ou mais classes aos elementos selecionados.
Exemplo: $('#elemento').addClass('nova-classe').

.removeClass(): Remove uma ou mais classes dos elementos selecionados.
Exemplo: $('#elemento').removeClass('classe-existente').

.toggleClass(): Alterna a presença de uma ou mais classes nos elementos selecionados.
Exemplo: $('#elemento').toggleClass('classe').


OUTRAS DUVIDAS
Seletor de atributo: Use colchetes ([]) para selecionar elementos com um atributo específico. Por exemplo, $('[type="text"]') selecionará todos os elementos com o atributo type igual a "text". 


Seletor de descendente: Você pode usar o espaço para selecionar elementos que são descendentes de outro elemento. Por exemplo, $('div p') selecionará todos os parágrafos que são descendentes de um elemento div. 


Seletor de elementos visíveis: Use o pseudo-seletor :visible para selecionar elementos que estão visíveis na página. Por exemplo, $('.elemento:visible') selecionará todos os elementos com a classe "elemento" que estão visíveis.


Seletor de elementos ocultos: Use o pseudo-seletor :hidden para selecionar elementos que estão ocultos na página. Por exemplo, $('.elemento:hidden') selecionará todos os elementos com a classe "elemento" que estão ocultos.


Combine seletores: Você pode combinar diferentes seletores para refinar sua seleção. Por exemplo, $('div .classe') selecionará todos os elementos com a classe "classe" que são descendentes de um elemento div.


Cache de seletores: Se você planeja usar o mesmo seletor várias vezes, armazene-o em uma variável para evitar pesquisas repetidas no DOM. Isso pode melhorar o desempenho do seu código.
*/