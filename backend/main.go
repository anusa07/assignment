package main

import (
	"assignment-backend/handlers"
	"assignment-backend/models"
	"log"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:4200"},
		AllowMethods: []string{http.MethodGet, http.MethodPost, http.MethodPut, http.MethodDelete},
	}))
	// Initialize database connection
	db, err := models.InitDB()
	if err != nil {
		log.Fatal("Failed to initialize the database: ", err)
	}

	// Initialize handlers with DB connection
	handlers.InitHandler(db)

	// Define routes
	e.GET("/users", handlers.GetUsers)
	e.GET("/users/:id", handlers.GetUser)
	e.POST("/users", handlers.CreateUser)
	e.PUT("/users/:id", handlers.UpdateUser)
	e.DELETE("/users/:id", handlers.DeleteUser)

	// Start server
	e.Logger.Fatal(e.Start(":8080"))
}
