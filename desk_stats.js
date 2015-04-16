(function(jQuery) {
  jQuery.fn.setUpForm = function() {
    // find "Reference" named checkbox grouping and mark up accessibly
    jQuery('input[name*="Reference"]').parents('div.form-type-checkbox').wrapAll('<fieldset class="subgroup"></div>');
    jQuery('input[name*="Reference"]').parents('fieldset.subgroup').prepend('<legend>Reference</legend>');

    // move student and faculty/staff types to beneath the appropriate radio button
    jQuery('.student-type').detach().insertAfter(jQuery('input[name="patron"][value="Student"]').parent('label'));
    jQuery('.staff-type').detach().insertAfter(jQuery('input[name="patron"][value="Faculty/Staff"]').parent('label'));
    jQuery('.external-type').detach().insertAfter(jQuery('input[name="patron"][value="External User"]').parent('label'));

    // remove extra asterisks added by form api states
    jQuery('input[name="override"]').click(function() {
      var labels = jQuery('.container-inline-date').find('label');
      for (var i=0; i<labels.length; i++) {
        jQuery(labels[i]).find('span.form-required').slice(1).remove();
      }
    });
  };
})(jQuery);

(function(jQuery) {
  jQuery.fn.resetFields = function(radioDefaults, textfieldDefaults) {
    radioDefaults = JSON.parse(radioDefaults);
    textfieldDefaults = JSON.parse(textfieldDefaults);

    for (var field in radioDefaults) {
      if(radioDefaults[field] == '') {
        if (field == 'patron') {
          jQuery('input[name="' + field + '"]').click();
        }
        else {
          jQuery('input[name="' + field + '"]').prop('checked', false);
        }
      }
      else {
        if (field == 'patron') {
          jQuery('input[name="' + field + '"][value="' + radioDefaults[field] + '"]').click();
        }
        else {
          jQuery('input[name="' + field + '"][value="' + radioDefaults[field] + '"]').prop('checked', true);
        }
      }
    }

    jQuery('.inquiry input[type="checkbox"]').prop('checked', false);

    for (var field in textfieldDefaults) {
      jQuery('input[name="' + field + '"]').val(textfieldDefaults[field]);
    }

    if (jQuery('input[name="override"]').prop('checked')) {
      jQuery('input[name="override"]').click();
    }

  };
})(jQuery);

(function(jQuery) {
  jQuery.fn.fadeSuccess = function() {
    setTimeout(function() {
      jQuery('.alert-success').fadeOut('slow');
    },
    5000);
  };
})(jQuery);

(function(jQuery) {
  jQuery.fn.showSaveLocationButton = function() {
    jQuery('.save-location').removeClass('hide');
  };
})(jQuery);

(function(jQuery) {
  jQuery.fn.hideSaveLocationButton = function() {
    jQuery('.save-location').addClass('hide');
  };
})(jQuery);
