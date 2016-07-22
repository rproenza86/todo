			my $sql =  qq|SELECT 
								DATE_FORMAT(MIN(start_time),'%m/%d/%Y %H:%i:00') AS intervals, db, from_unixtime(ROUND(UNIX_TIMESTAMP(start_time) / ? * 60), '%Y %D %M %h:%i:%s') as lapso,
							 	avg(elapsed_time) AS avg FROM analogue.db_calls
						 	WHERE db = ?
						 	GROUP BY ROUND(UNIX_TIMESTAMP(start_time) / ? * 60), db ORDER BY intervals DESC LIMIT ?;|;
						 	
						 	SELECT DATE_FORMAT(MIN(start_time),'%m/%d/%Y %H:%i:00') AS intervals, db, from_unixtime(ROUND(UNIX_TIMESTAMP(start_time) / 300), '%Y %D %M %h:%i:%s') as lapso,
 avg(elapsed_time) AS tmstamp FROM analogue.db_calls
 WHERE db = 'MDB'
 GROUP BY ROUND(UNIX_TIMESTAMP(start_time) / 300), db ORDER BY intervals DESC LIMIT 10;
