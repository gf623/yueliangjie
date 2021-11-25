package main

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type Book struct {
	Id       int
	Name     string
	Author   string
	Category string
}

var (
	RedisIp    = "127.0.0.1"
	RedisPort  = "6379"
	expireTime = 600
	rdb        *redis.Client
)

func main() {
	// dsn := "root:@tcp(127.0.0.1:3306)/yueliangjie"
	db, _ := gorm.Open("mysql", "root:@tcp(127.0.0.1:3306)/yueliangjie")
	var book Book
	// db.Find(&book)
	db.First(&book, "id = ?", 1)
	fmt.Println("books:", book.Id, book.Name, book.Author)

	rdb = redis.NewClient(&redis.Options{Addr: RedisIp + ":" + RedisPort, Password: ""})
	_, err := rdb.Ping().Result()
	if err != nil {
		fmt.Println("redis连接错误")
	}
	a, err := rdb.Exists("foo").Result()
	if err != nil {
		fmt.Println("判断key存在失败")
		// return
	}

	if a == 1 {
		fmt.Println("key存在")
	} else {
		rdb.Set("foo", "bar", time.Hour*24)
	}

	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		foo := rdb.Get("foo")
		fmt.Println("foo:", foo)
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080
}
