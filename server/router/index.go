package router

import (
	controllers "yueliangjie/controllers/english"

	"github.com/gin-gonic/gin"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func InitRouter() {
	router := gin.Default()

	// Simple group: v1
	v1 := router.Group("/english")
	{
		v1.POST("/words/save", controllers.SaveWords)
		// v1.POST("/submit", submitEndpoint)
		// v1.POST("/read", readEndpoint)
	}

	// Simple group: v2
	// v2 := router.Group("/v2")
	// {
	// 	v2.POST("/login", loginEndpoint)
	// 	v2.POST("/submit", submitEndpoint)
	// 	v2.POST("/read", readEndpoint)
	// }

	router.Run(":8080")
}
