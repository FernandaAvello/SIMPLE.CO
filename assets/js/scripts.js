// Inicializo variable de clicks en 0
let click = 0

// Creo constante de Estilo Azul ya que se ocupará más de una vez
const blueInputStyle = {
  'background-color': '#bfe1ec',
  'color': 'blue'
}
// Si el código de descuento es 'JQUERY2222', entonces el input tomará el color verde
$(function () {
  $('input').keyup (function () {
    if($('input').val() === 'JQUERY2222') {
      $('input').css({
        'background-color': '#aaf1a9',
        'color': 'green'
      })
// Si no, seguirá apareciendo el Input en color Azul
    } else {
      $('input').css(blueInputStyle)
    }
  })
// Al hacer click en el Input por primera vez, se pondrá azul
  $('input').click(function () {
    $('input').css(blueInputStyle)
  })
// Cuando el contador de click sea 1, el botón será amarillo
  $('button').click(function () {
    click++
    $('button').css({
      'background-color': '#ffc107',
      'border-color': '#ffc107',
      'color': 'white',
    })
    $('button').text('¿Estás seguro?')
  })
// Cuando se haga doble click, el botón se pondrá de color azul
  $('button').dblclick(function () {
    click++
    $('button').css({
      'background-color': '#0800ff',
      'border-color': '#0800ff',
      'color': 'white',
    })
    $('button').text('¡OK!')
  })
// Cuando el mouse se vaya del Input y el contador de click sea mayor a 2, el botón dira comprado
  $('button').mouseleave(function () {
    if (click > 2) {
      $('button').css({
        'background-color': 'lightgray',
        'border-color': 'red',
        'color': 'green',
      })
      $('button').text('COMPRADO')
    }
  })
})