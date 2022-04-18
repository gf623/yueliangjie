
CREATE TABLE IF NOT EXISTS `words`(
   `source_id` INT NOT NULL,
   `source_type` INT NOT NULL COMMENT '1-book, 2-video',
   `word` VARCHAR(30) NOT NULL,
   `sentence` VARCHAR(200) NOT NULL,
   PRIMARY KEY ( `word` )
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `sentences`(
   `id` INT NOT NULL,
   `sentence` VARCHAR(200) NOT NULL,
   `author` VARCHAR(40) NOT NULL,
   `category` VARCHAR(40) NOT NULL,
   PRIMARY KEY ( `id` )
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `videos`(
   `id` INT NOT NULL,
   `name` VARCHAR(100) NOT NULL,  
   `author` VARCHAR(40) NOT NULL,
   `category` VARCHAR(40) NOT NULL,
   PRIMARY KEY ( `id` )
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `books`(
   `id` INT NOT NULL,
   `name` VARCHAR(100) NOT NULL,  
   `author` VARCHAR(40) NOT NULL,
   `category` VARCHAR(40) NOT NULL,
   PRIMARY KEY ( `id` )
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

