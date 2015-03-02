<div id="ajax-status-messages-wrapper"></div>
<?php
print (drupal_render($stats_form));
drupal_add_css(
    '#content h2 {
      margin-top: 0;
    }
    .page-desk-stats .tabs {
      margin: 0;
    }
    .page-desk-stats form p {
      margin: 1em 0 0 0;
    }
    .page-desk-stats form .container-inline {
      margin-bottom: 10px;
    }
    .page-desk-stats form input.form-radio {
      margin-left: 20px;
      float: none;
    }
    .page-desk-stats form .form-type-radio label {
      margin-left: 5px;
    }
    .page-desk-stats .form-item-location {
      display: inline-block;
    }
    .page-desk-stats select#edit-location {
      display: inline-block;
    }
    .page-desk-stats label[for="edit-inquiry-complex-reference-5-15"], label[for="edit-inquiry-complex-reference-15"], label[for="edit-inquiry-expert-reference"] {
      margin-left: 30px !important;
    }
    .page-desk-stats p.radio-label {
      margin: 0 0 -5px 45px;
    }
    .page-desk-stats #form-container select {
      margin-bottom: 15px;
    }',
    'inline'
);
