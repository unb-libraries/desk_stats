<?php
/**
 * @file
 * desk_stats.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function desk_stats_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_desk_stats_location'
  $field_bases['field_desk_stats_location'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_desk_stats_location',
    'indexes' => array(
      'format' => array(
        0 => 'format',
      ),
    ),
    'locked' => 0,
    'module' => 'text',
    'settings' => array(
      'max_length' => 255,
    ),
    'translatable' => 0,
    'type' => 'text',
  );

  return $field_bases;
}
