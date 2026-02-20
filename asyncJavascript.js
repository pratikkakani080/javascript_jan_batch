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

const asyncData = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/photos");
    let result = await res.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

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

const updatedData = fetch("https://jsonplaceholder.typicode.com/photos/10", {
  method: "PUT",
  body: JSON.stringify({
    url: "test",
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

const deletedData = fetch("https://jsonplaceholder.typicode.com/photos/10", {
  method: "DELETE",
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

setTimeout(() => {
  console.log("this will be popped up after 5 secs");
}, 5000);

const interval = setInterval(() => {
  console.log("this will run at every 5 secs");
}, 5000);

// clearInterval(interval)
