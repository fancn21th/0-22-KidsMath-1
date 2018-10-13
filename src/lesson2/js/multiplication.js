define('multiplication', ['jquery', 'dotMatrix', 'util' ], function( $, DotMatrix, { random } ) {
  const $operantA = $('#operandA'),
    $operantB = $('#operandB')

  const getOperand = ($operand) => {
    return parseInt($operand.val(), 10) || 0
  }

  const onChange = () => {
    const row = getOperand($operantA),
      col = getOperand($operantB)
    draw(row, col)
  }

  const draw = (row, col) => {
    $('#m_result').text(row * col)
    const matrix = DotMatrix(row, col)
    matrix.render('.result')
  }

  const drawRandomOprands = () => {
    const row = random(10, 20),
      col = random(10, 20)
    $operantA.val(row)
    $operantB.val(col)
    draw(row, col)
  }

  const init = () => {
    $operantA.change(onChange)
    $operantB.change(onChange)
    drawRandomOprands()
  }

  init()
})
