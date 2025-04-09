package services

import (
	"context"
	"encoding/json"
	"ericluec-blog-page/config"
	"ericluec-blog-page/entities"
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

	var blogEntry entities.BlogEntry
	if err := json.NewDecoder(r.Body).Decode(&blogEntry); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	collection := client.Database("ericluec-blogPage").Collection("blogEntries")
	result, err := collection.InsertOne(context.Background(), blogEntry)
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

	var blogEntries []entities.BlogEntry
	for cursor.Next(context.Background()) {
		var blogEntry entities.BlogEntry
		if err := cursor.Decode(&blogEntry); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		blogEntries = append(blogEntries, blogEntry)
	}

	json.NewEncoder(w).Encode(blogEntries)
}
