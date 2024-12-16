<?php
$conn = @mysqli_connect("localhost","xxx","114514","xxx");
if (mysqli_connect_errno($conn)){
	die("连接数据库失败：" . mysqli_connect_error());
}

/*
CREATE TABLE `sc_form` (
  `uid` mediumint(8) unsigned NOT NULL auto_increment,
  `read` TINYINT(1) DEFAULT 0,
  `data` text,
  PRIMARY KEY  (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;
*/
?>