package repositories

import (
	"context"
	"ericluec-blog-page/entities"
)

type BlogEntry interface {
	CreateBlogEntry(ctx context.Context, task entities.BlogEntry) error
}
