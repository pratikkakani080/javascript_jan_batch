const data = fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => {
    return res.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("this will run all the time");
  });

console.log(data);

const createdData = fetch("https://jsonplaceholder.typicode.com/photos", {
  method: "POST",
  body: JSON.stringify({
    title: "test",
    url: "test",
    thumbnailUrl: "test",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("this will run all the time");
  });

// CRUD operations
// POST - Create
// GET - Read
// PUT / PATCH - Update
// DELETE - Delete
