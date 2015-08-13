#!/usr/bin/perl

use DBI;

$dbhost = "localhost";
$dbname = "drupal";
$dbuser = "root@localhost";
$dbpass = "root";

$db = DBI->connect("DBI:mysql:$dbname","$dbuser","$dbpass");

#$sql = "DROP TABLE desk_stats";
#$cmd = $db->prepare($sql);
#$cmd->execute or die "SQL Error: $DBI::errstr\n";

$sql = "CREATE TABLE desk_stats (
  time_stamp datetime  NOT NULL,
  location varchar(12) NOT NULL default '',
  inq_type varchar(25) NOT NULL default '',
  inq_count int NOT NULL default '1',
  inquiry_notes varchar(256) NOT NULL default '',
  patron varchar(15) NOT NULL default '',
  patron_options varchar(20) NOT NULL default '',
  method varchar(10) NOT NULL default '',
  referral varchar(21) NOT NULL default '',
  responder varchar(25) NOT NULL default '',
  referral_details varchar(256) NOT NULL default '',
  KEY (time_stamp),
  KEY (location)
)";

$cmd = $db->prepare($sql);
$cmd->execute or die "SQL Error: $DBI::errstr\n";
