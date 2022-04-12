package controllers

import (
	"yueliangjie/db"

	"github.com/gin-gonic/gin"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type Word struct {
	Word     string
	Sentence string
}

func SaveWords(c *gin.Context) {
	w := c.PostForm("word")
	s := c.PostForm("sentence")
	o := db.GetMysqlOrm()
	word := Word{Word: w, Sentence: s}

	err := o.Create(&word).Error // pass pointer of data to Create
	if err != nil {
		c.JSON(500, gin.H{
			"code":    500,
			"message": err.Error(),
			"data":    nil,
		})
	} else {
		c.JSON(200, gin.H{
			"message": "success",
		})
	}
}
