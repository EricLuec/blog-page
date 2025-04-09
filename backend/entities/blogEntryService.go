package services

import (
	"context"
	"encoding/json"
	"go.mongodb.org/mongo-driver/bson"
	"net/http"
)

func CreateBlogEntry(w http.ResponseWriter, r *http.Request) {
	client, err := config.ConnectToMongoDB()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer client.Disconnect(context.Background())

	var room entities.Room
	if err := json.NewDecoder(r.Body).Decode(&room); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	collection := client.Database("bbb-lars").Collection("rooms")
	result, err := collection.InsertOne(context.Background(), room)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(result)
}

func GetAllBlogEntries(w http.ResponseWriter, r *http.Request) {
	client, err := config.ConnectToMongoDB()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer client.Disconnect(context.Background())

	collection := client.Database("ericluec-blogPage").Collection("blogEntries")
	cursor, err := collection.Find(context.Background(), bson.D{})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer cursor.Close(context.Background())

	var rooms []entities.blogEntry
	for cursor.Next(context.Background()) {
		var blogEntry entities.blogEntry
		if err := cursor.Decode(&room); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		rooms = append(blogEntries, blogEntry)
	}

	json.NewEncoder(w).Encode(blogEntries)
}
