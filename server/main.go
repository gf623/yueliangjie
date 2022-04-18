package main

import (
	"yueliangjie/db"
	"yueliangjie/router"

	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type Book struct {
	Id       int
	Name     string
	Author   string
	Category string
}

func main() {
	db.InitMysql()
	db.InitRedis()
	router.InitRouter()

	// r := gin.Default()
	// r.GET("/ping", func(c *gin.Context) {
	// 	foo := rdb.Get("foo")
	// 	fmt.Println("foo:", foo)
	// 	c.JSON(200, gin.H{
	// 		"message": "pong",
	// 	})
	// })
	// r.Run() // listen and serve on 0.0.0.0:8080
}
