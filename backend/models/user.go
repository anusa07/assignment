package models

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq" // PostgreSQL driver
)

// User struct represents a user in the database
type User struct {
	ID       int    `json:"id"`
	UserName string `json:"user_name"`
	Email    string `json:"email"`
}

// InitDB initializes the PostgreSQL database connection
func InitDB() (*sql.DB, error) {
	connStr := "user=assignment_user password=admin dbname=postgres sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Println("Failed to open the database:", err)
		return nil, err
	}

	// Ping the database to check connection
	if err := db.Ping(); err != nil {
		log.Println("Failed to ping the database:", err)
		return nil, err
	}

	log.Println("Database connection established")
	return db, nil
}
