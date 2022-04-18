package db

import (
	"github.com/jinzhu/gorm"
)

var mysqlDB *gorm.DB

func InitMysql() {
	// dsn := "root:@tcp(127.0.0.1:3306)/yueliangjie"
	mysqlDB, _ = gorm.Open("mysql", "root:@tcp(127.0.0.1:3306)/yueliangjie")
	// return mysqlDB
}

func GetMysqlOrm() *gorm.DB {
	return mysqlDB
}
