<?php
/**
 * @file
 * desk_stats.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function desk_stats_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'user-user-field_desk_stats_location'
  $field_instances['user-user-field_desk_stats_location'] = array(
    'bundle' => 'user',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 17,
      ),
    ),
    'entity_type' => 'user',
    'field_name' => 'field_desk_stats_location',
    'label' => 'Desk Stats Location',
    'required' => 0,
    'settings' => array(
      'text_processing' => 0,
      'user_register_form' => 0,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 19,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Desk Stats Location');

  return $field_instances;
}
