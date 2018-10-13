String.prototype.supplant = function (o) {
  return this.replace(
    /{([^{}]*)}/g,
    function (a, b) {
      var r = o[b]
      return typeof r === 'string' || typeof r === 'number' ? r : a
    }
  )
}

$(function () {
  var $operantA = $('#operandA'),
    $operantB = $('#operandB'),
    durationStepMs = 20,
    currentDurationStepMs = 0
  var random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  var resetDurationStep = function () {
    currentDurationStepMs = 0
  }
  var nextDurationStepMs = function () {
    return (currentDurationStepMs += durationStepMs) / 1000
  }
  var styleByRow = function(i) {
    if(i >= 10) return 'green'
    return ''
  }
  var styleByColumn = function(i) {
    if(i >= 30) return 'green'
    return ''
  }
  var randomStyle = function() {
    var number = random(1, 4)
    switch (number) {
      case 1:
        return ''
      case 2:
        return 'yellow'
      case 3:
        return 'blue'
      case 4:
        return 'green'
      default:
        return ''
    }
  }
  var drawDots = function (row, column) {
    var tplRow = $('#tpl_row').text().trim(),
      tplDot = $('#tpl_dot').text().trim(),
      $tplResult = $('.result'),
      i = 0,
      j = 0,
      rowContent = '',
      content = ''

    // clear
    $tplResult.empty()
    // reset
    resetDurationStep()

    for (; i < row; i++) {
      j = 0
      // reset row content
      rowContent = ''
      for (; j < column; j++) {
        rowContent += tplDot.supplant({
          dotStyle: styleByRow(i),
          dotDuration: nextDurationStepMs()
        })
      }
      content += tplRow.supplant({
        rowContent: rowContent
      })
    }

    // append the content
    $tplResult.append(content)
  }
  var getOperand = function ($operand) {
    return parseInt($operand.val(), 10) || 0
  }
  var update = function (a, b) {
    $('#m_result').text(a * b)
    drawDots(a, b)
  }
  var onChange = function () {
    var a = getOperand($operantA),
      b = getOperand($operantB)
    update(a, b)
  }
  var updateWithRandomNum = function () {
    var a = random(10, 20),
      b = random(10, 20)
    $operantA.val(a)
    $operantB.val(b)
    update(a, b)
  }
  var init = function () {
    $operantA = $('#operandA')
    $operantB = $('#operandB')
    $operantA.change(onChange)
    $operantB.change(onChange)
    // setInterval(updateWithRandomNum, 5000)
    updateWithRandomNum()
  }
  init()
})
