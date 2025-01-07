```javascript
const query = { name: { $regex: 'pattern', $options: 'i' } };
// ... other query parts

db.collection('myCollection').find(query).toArray((err, docs) => {
  if (err) {
    console.error('Error executing query:', err);
    // Add more robust error handling, such as retry logic or logging to a central system.
  } else if (docs === null || docs.length === 0) {
    console.log('No documents found.');
  } else {
    console.log('Documents:', docs);
  }
});
```