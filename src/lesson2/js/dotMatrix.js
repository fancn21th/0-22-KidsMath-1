/*
  Dot Matrix
    * draw dots
    * regardless of math meaning
    * easy to shift to canvas later on
*/
define('dotMatrix', ['jquery', 'util'], function( $, { random } ) {
  if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
      return this.replace(
        /{([^{}]*)}/g,
        function (a, b) {
          var r = o[b]
          return typeof r === 'string' || typeof r === 'number' ? r : a
        }
      )
    }
  }

  const DotMatrix = function(row, col) {
    const $tplRow = $('#tpl_row').text().trim(),
      $tplDot = $('#tpl_dot').text().trim(),
      durationStepMs = 20

    let currentDurationStepMs

    const randomStyle = function() {
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

    const nextDurationStepMs = function () {
      return (currentDurationStepMs += durationStepMs) / 1000
    }

    const render = (containerId) => {
      const $container = $(containerId)
      let content = ''
      $container.empty()
      currentDurationStepMs = 0
      for (let i = 0; i < row; i++) {
        let j = 0
        let rowContent = ''
        for (; j < col; j++) {
          rowContent += $tplDot.supplant({
            dotStyle: randomStyle(),
            dotDuration: nextDurationStepMs()
          })
        }
        content += $tplRow.supplant({
          rowContent,
        })
      }
      $container.append(content)
    }

    return {
      render,
    }
  }

  return DotMatrix
})
