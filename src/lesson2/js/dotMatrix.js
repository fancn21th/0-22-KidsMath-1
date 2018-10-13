/*
  Dot Matrix
    * regardless of math meaning
    * easy to shift to canvas later on
*/

const dotMatrixLib = $(function($){

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

    /*
      callback(row, col)
    */
    const DotMatrix = function(
      row,
      col,
      callback
    ) {
      const _tplRow = $('#tpl_row').text().trim(),
            _tplDot = $('#tpl_dot').text().trim(),
            _dotMatrix = {},
            _row = row,
            _col = col,
            _callback = callback

      const _genContent = function() {

      }

      return _dotMatrix
    }

    return {
      constructor: DotMatrix
    }
}(jQuery))

