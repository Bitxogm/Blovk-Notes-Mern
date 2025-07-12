import Navbar from "../components/NavBar";
import NoteCard from "../components/NoteCard";
import { useState, useEffect } from "react";
import RateLimitedUI from "../components/RateLimitedUI";
import api from "../lib/axios";
import axios from "axios";
import toast from "react-hot-toast";

const HomePage = () => {
  const [IsRateLimited, setIsrateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchNotes = async () => {

    try {
      const res = await api.get("/notes");
      console.log(res.data);
      setNotes(res.data)
      setIsrateLimited(false)
    } catch (error) {
      console.log("Error fetching notes");
      console.log(error)
      if(error.response?.status === 429){
        setIsrateLimited(true)
      }else{
        toast.error("Failed to load notes")
      }
    }finally{
      setLoading(false)
    }
  };
  fetchNotes();
}, []);
      
return (
  <div className='min-h-screen'>
    <Navbar />
    { IsRateLimited && <RateLimitedUI />}

  <div className="max-w-7xl mx-auto p-4 mt-6">
    {loading && <div className="text-center text-primary py-10">Loading notes....</div>}

    {notes.length > 0 && !IsRateLimited && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note ) => (
         <NoteCard key={note._id} note={note} />
        ))}

      </div>
    )}

  </div>

  </div>
)
};
export default HomePage;

 
  
