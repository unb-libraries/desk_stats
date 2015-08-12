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
	$location = $db->quote($fields[1]);
	$inq_type = $db->quote($fields[2]);
	$inq_count = $db->quote($fields[3]);
	$inquirynotes = $db->quote($fields[4]);
	$patron = $db->quote($fields[5]);
	$patron_options = $db->quote($fields[6]);
	$method = $db->quote($fields[7]);
	$referral = $db->quote($fields[8]);
	$responder = $db->quote($fields[9]);
	$referral_details = $db->quote($fields[10]);
	$sql = "INSERT INTO desk_stats (timestamp,location,inq_type,inq_count,
		inquiry_notes,patron,patron_options,method,referral,responder,referral_details)
		VALUES ($timestamp,$location,$inq_type,$inq_count,$inquiry_notes,$patron,
			$patron_options,$method,$referral,$responder,$referral_details)";
	$cmd = $db->prepare($sql);
	$cmd->execute or print "SQL Error: $DBI::errstr\n";
}
