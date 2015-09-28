(function(jQuery) {
  jQuery.fn.setUpForm = function() {

    // move student and faculty/staff types to beneath the appropriate radio button
    jQuery('.student-type').detach().insertAfter(jQuery('input[name="patron"][value="Student"]').next('label'));
    jQuery('.staff-type').detach().insertAfter(jQuery('input[name="patron"][value="Faculty/Staff"]').next('label'));
    jQuery('.external-type').detach().insertAfter(jQuery('input[name="patron"][value="External User"]').next('label'));

    // remove extra asterisks added by form api states
    jQuery('input[name="override"], select').click(function() {
      var labels = jQuery('div.date, div.time').find('label');
      for (var i=0; i<labels.length; i++) {
        jQuery(labels[i]).find('span.form-required').slice(1).remove();
      }
    });
  };
})(jQuery);

(function(jQuery) {
  jQuery.fn.resetFields = function(radioDefaults) {
    radioDefaults = JSON.parse(radioDefaults);

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

    if (jQuery('input[name="override"]').prop('checked')) {
      jQuery('input[name="override"]').click();
    }

  };
})(jQuery);

(function(jQuery) {
  jQuery.fn.fadeSuccess = function() {
  jQuery('html, body').animate({scrollTop: 0}, 'slow');
    setTimeout(function() {
      jQuery('.alert-success').fadeOut(1000);
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

(function(jQuery) {
  jQuery.fn.refreshStats = function(location) {
    jQuery.get('desk-stats-ajax-stats/' + location, function(data) {
        jQuery('#stats').html(data);
    }, 'html');
  };
})(jQuery);

jQuery(document).ready(function() {
  jQuery.fn.setUpForm();
});
