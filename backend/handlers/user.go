package handlers

import (
	"database/sql"
	"fmt"
	"net/http"
	"strconv"

	"assignment-backend/models"

	"github.com/Masterminds/squirrel"
	"github.com/labstack/echo/v4"
)

var db *sql.DB

// InitHandler initializes the handler with a database connection
func InitHandler(database *sql.DB) {
	db = database
}

// GetUsers fetches all users from the database
// GetUser fetches a single user by ID from the database
// GetUser fetches a single user by ID from the database
// GetUser fetches a single user by ID from the database
func GetUser(c echo.Context) error {
	id := c.Param("id")
	userID, err := strconv.Atoi(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid user ID"})
	}

	var user models.User

	query := squirrel.Select("id", "user_name", "email").From("users").Where(squirrel.Eq{"id": userID}).PlaceholderFormat(squirrel.Dollar)
	sqlQuery, args, err := query.ToSql()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to build query"})
	}

	// Log the SQL query and arguments for debugging
	fmt.Println("SQL Query:", sqlQuery)
	fmt.Println("Arguments:", args)

	row := db.QueryRow(sqlQuery, args...)

	err = row.Scan(&user.ID, &user.UserName, &user.Email)
	if err != nil {
		if err == sql.ErrNoRows {
			return c.JSON(http.StatusNotFound, map[string]string{"error": "User not found"})
		}
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": fmt.Sprintf("Error scanning result: %v", err)})
	}

	return c.JSON(http.StatusOK, user)
}

// GetUsers fetches all users from the database
// GetUsers fetches all users from the database, sorted by ID
func GetUsers(c echo.Context) error {
	users := []models.User{}

	// Build the query with sorting by ID
	query := squirrel.Select("id", "user_name", "email").
		From("users").
		OrderBy("id ASC") // Add sorting by ID in ascending order

	sqlQuery, args, err := query.ToSql()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to build query"})
	}

	rows, err := db.Query(sqlQuery, args...)
	if err != nil {
		fmt.Println(err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to fetch users"})
	}
	defer rows.Close()

	for rows.Next() {
		var user models.User
		if err := rows.Scan(&user.ID, &user.UserName, &user.Email); err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Error scanning result"})
		}
		users = append(users, user)
	}

	return c.JSON(http.StatusOK, users)
}

// CreateUser adds a new user to the database
func CreateUser(c echo.Context) error {
	fmt.Println("here")
	user := new(models.User)
	if err := c.Bind(user); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid input"})
	}

	query := squirrel.Select("id").From("users").Where(squirrel.Eq{"user_name": user.UserName})
	sqlQuery, args, err := query.ToSql()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to build query"})
	}

	var existingUserID int
	err = db.QueryRow(sqlQuery, args...).Scan(&existingUserID)
	if err == nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Username already exists"})
	}

	// insertQuery := squirrel.Insert("users").Columns("user_name", "email").Values(user.UserName, user.Email).Suffix("RETURNING id")
	insertQuery := squirrel.Insert("users").
		Columns("user_name", "email").
		Values(user.UserName, user.Email).
		Suffix("RETURNING id").
		PlaceholderFormat(squirrel.Dollar)
	sqlInsertQuery, insertArgs, err := insertQuery.ToSql()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to build insert query"})
	}

	err = db.QueryRow(sqlInsertQuery, insertArgs...).Scan(&user.ID)
	if err != nil {
		fmt.Println(err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to insert user"})
	}

	return c.JSON(http.StatusCreated, user)
}

// UpdateUser updates an existing user in the database
func UpdateUser(c echo.Context) error {
	id := c.Param("id")
	userID, err := strconv.Atoi(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid user ID"})
	}

	user := new(models.User)
	if err := c.Bind(user); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid input"})
	}

	updateQuery := squirrel.Update("users").Set("user_name", user.UserName).Set("email", user.Email).Where(squirrel.Eq{"id": userID}).PlaceholderFormat(squirrel.Dollar)
	sqlUpdateQuery, updateArgs, err := updateQuery.ToSql()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to build update query"})
	}

	_, err = db.Exec(sqlUpdateQuery, updateArgs...)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to update user"})
	}

	return c.JSON(http.StatusOK, user)
}

// DeleteUser removes a user from the database
func DeleteUser(c echo.Context) error {
	id := c.Param("id")
	userID, err := strconv.Atoi(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid user ID"})
	}

	deleteQuery := squirrel.Delete("users").Where(squirrel.Eq{"id": userID}).PlaceholderFormat(squirrel.Dollar)
	sqlDeleteQuery, deleteArgs, err := deleteQuery.ToSql()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to build delete query"})
	}

	_, err = db.Exec(sqlDeleteQuery, deleteArgs...)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to delete user"})
	}

	return c.NoContent(http.StatusNoContent)
}
