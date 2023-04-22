(function($) {
    "use strict";

  //Datatable
  $('#leads').DataTable({
    "bPaginate": true,
    "bLengthChange": false,
    "bFilter": false,
    "bInfo": true,
    "bAutoWidth": false,
  // responsive: true,
  //  "bFilter": false,
  // language: {
  //     searchPlaceholder: 'Search...',
  //     sSearch: '',
  //     lengthMenu: '_MENU_ Items',
  //     }
  });

  //Datatable
  $('.usertables').DataTable({
    "bPaginate": true,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": true,
    "bAutoWidth": false,
  // responsive: true,
  //  "bFilter": false,
  // language: {
  //     searchPlaceholder: 'Search...',
  //     sSearch: '',
  //     lengthMenu: '_MENU_ Items',
  //     }
  });


})(window.jQuery);