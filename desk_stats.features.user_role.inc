<?php
/**
 * @file
 * desk_stats.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function desk_stats_user_default_roles() {
  $roles = array();

  // Exported role: Desk Stats Recorder.
  $roles['Desk Stats Recorder'] = array(
    'name' => 'Desk Stats Recorder',
    'weight' => 7,
  );

  return $roles;
}
