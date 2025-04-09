package main

import (
	"ericluec-blog-page/services"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/blogEntries", services.GetAllBlogEntries).Methods("GET")
	r.HandleFunc("/blogEntry", services.CreateBlogEntry).Methods("POST")

	/*
		r.HandleFunc("/table-groups", services.GetAllTableGroups).Methods("GET")
		r.HandleFunc("/table-group", services.CreateTableGroup).Methods("POST")

		r.HandleFunc("/rooms", services.GetAllRooms).Methods("GET")
		r.HandleFunc("/room", services.CreateRoom).Methods("POST")
	*/
	fmt.Println("Server running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", r))

}
