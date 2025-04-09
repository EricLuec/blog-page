package entities

import "go.mongodb.org/mongo-driver/bson/primitive"

type BlogEntry struct {
	ID          primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Name        string             `bson:"name,omitempty" json:"name,omitempty"`
	Description string 				`bson:"description,omitempty" json:"description,omitempty"`
}
