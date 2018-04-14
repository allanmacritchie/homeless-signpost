
const Authors = Bookshelf.Collection.extend({
    model: Author
});

const Books = Bookshelf.Collection.extend({
    model: Book
});

const Categories = Bookshelf.Collection.extend({
    model: Category
});

const Tags = Bookshelf.Collection.extend({
    model: Tag
});

model.exports = {
    Authors: Authors,
    Books: Books,
    Categories: Categories,
    Tags: Tags
};