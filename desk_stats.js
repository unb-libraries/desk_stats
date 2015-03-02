(function(jQuery) {
  jQuery.fn.setUpForm = function() {
    // add radio category label
    jQuery('label[for="edit-inquiry-complex-reference-5-15"]').parent('div').before('<p class="radio-label">Basic Reference</p>');
    // show time input when override is selected
    jQuery('input[name="override"]').change(function() {
      if (jQuery('input[name="override"]').prop('checked')) {
        jQuery('div.timestamp').removeClass('hide');
      }
      else {
        jQuery('div.timestamp').addClass('hide');
      }
    });
  };
})(jQuery);

(function(jQuery) {
  jQuery.fn.resetResponder = function(location) {
    jQuery('select[name="responder"]').val('Research Help Desk');
  };
})(jQuery);

(function(jQuery) {
  jQuery.fn.resetFields = function(selectDefaults, radioDefaults, textfieldDefaults) {
    selectDefaults = JSON.parse(selectDefaults);
    radioDefaults = JSON.parse(radioDefaults);
    textfieldDefaults = JSON.parse(textfieldDefaults);

    for (var field in selectDefaults) {
      jQuery('select[name="' + field + '"]').val(selectDefaults[field]);
    }

    for (var field in radioDefaults) {
      if(radioDefaults[field] == '') {
        jQuery('input[name="' + field + '"]').prop('checked', false);
      }
      else {
        jQuery('input[name="' + field + '"][value="' + radioDefaults[field] + '"]').prop('checked', true);
      }
    }

    for (var field in textfieldDefaults) {
      jQuery('input[name="' + field + '"]').val(textfieldDefaults[field]);
    }
    hideTimestamp();
  };
})(jQuery);

function hideTimestamp() {
  jQuery('input[name="override"]').prop('checked', false);
  jQuery('div.timestamp').addClass('hide');
}

