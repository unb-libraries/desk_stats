#!/usr/bin/perl

use DBI;

$dbhost = "localhost";
$dbname = "drupal";
$dbuser = "root@localhost";
$dbpass = "root";

$db = DBI->connect("DBI:mysql:$dbname","$dbuser","$dbpass");

while(<>) {
	(@fields) = split /\|/;
	$timestamp = $db->quote($fields[0]);
	$desk = $db->quote($fields[1]);
	$inq_type = $db->quote($fields[2]);
	$inq_count = $db->quote($fields[3]);
	$notes = $db->quote($fields[4]);
	$patron = $db->quote($fields[5]);
	$patron_ext = $db->quote($fields[6]);
	$method = $db->quote($fields[7]);
	$referral = $db->quote($fields[8]);
	$responder = $db->quote($fields[9]);
	$referral_notes = $db->quote($fields[10]);
	$sql = "INSERT INTO desk_stats (timestamp,desk,inq_type,inq_count,
		notes,patron,patron_ext,method,referral,responder,referral_notes)
		VALUES ($timestamp,$desk,$inq_type,$inq_count,$notes,$patron,
			$patron_ext,$method,$referral,$responder,$referral_notes)";
	$cmd = $db->prepare($sql);
	$cmd->execute or print "SQL Error: $DBI::errstr\n";
}
