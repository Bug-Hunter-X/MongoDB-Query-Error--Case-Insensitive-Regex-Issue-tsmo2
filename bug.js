```javascript
const query = { name: /pattern/i };
// ... other query parts

db.collection('myCollection').find(query).toArray((err, docs) => {
  if (err) {
    console.error('Error executing query:', err);
  } else {
    console.log('Documents:', docs);
  }
});
```