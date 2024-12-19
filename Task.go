package main

import (
	"encoding/json"
	"net/http"
)

type Task struct {
	ID     string `json:"id"`
	Title  string `json:"title"`
	Status string `json:"status"`
}

var tasks = []Task{
	{ID: "1", Title: "Task 1", Status: "Pending"},
	{ID: "2", Title: "Task 2", Status: "Completed"},
}

func getTasks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(tasks)
}

func main() {
	http.HandleFunc("/tasks", getTasks)
	http.ListenAndServe(":8080", nil)
}
