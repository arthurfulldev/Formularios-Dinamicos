$(document).ready( function() {
    $(function () {
       // $('[data-toggle="tooltip"]').tooltip()
       $( '.specialCollapse' ).on('click', () => {
           alert('diste click')
          $('#field_0').collapse({
            toggle: false
          })
       })
    })
});