package db

import (
	"fmt"

	"github.com/go-redis/redis"
)

type Book struct {
	Id       int
	Name     string
	Author   string
	Category string
}

var (
	RedisIp   = "127.0.0.1"
	RedisPort = "6379"
	// expireTime = 600
	rdb *redis.Client
)

func InitRedis() *redis.Client {

	rdb = redis.NewClient(&redis.Options{Addr: RedisIp + ":" + RedisPort, Password: ""})
	_, err := rdb.Ping().Result()
	if err != nil {
		fmt.Println("redis连接错误")
	}
	// a, err := rdb.Exists("foo").Result()
	// if err != nil {
	// 	fmt.Println("判断key存在失败")
	// 	// return
	// }

	// if a == 1 {
	// 	fmt.Println("key存在")
	// } else {
	// 	rdb.Set("foo", "bar", time.Hour*24)
	// }

	return rdb
}
