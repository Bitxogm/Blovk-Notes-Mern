import express from 'express';

const app = express();
const PORT= 5002; 

//Endpoints
app.get('/api/notes', (req, res) => {
  // Send the notes
  res.status(200).send('You got 55 notes');
});

app.post('/api/notes', (req, res) => {
  // Create  the notes
  res.status(201).json( {message:"✅ Note created successfully!!" });
});

app.put('/api/notes:id', (req, res) => {
  // Update the notes
  res.status(200).json( {message:"✅ Note updated successfully!!" });
});

app.delete  ('/api/notes:id', (req, res) => {
  // Delete the notes
  res.status(200).json( {message:"✅ Note deleted  successfully!!" });
});


app.listen(PORT, () => {
  // console.log('Server started on port: 5001')
  console.log(`😁 Server started at port : ${PORT}`);

}); 

