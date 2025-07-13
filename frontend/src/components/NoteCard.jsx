import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes}) => {

  const handleDelete = async (e, id) => {
    e.preventDefault();
    if(!window.confirm("Are you sure want to delete this n ote")) return;

    try {
      await api.delete(`/notes/${id}`)
      setNotes((prev) => prev.filter(note => note._id !== id));
      toast.success("Note delete successfully")
    } catch (error) {
      console.log("Error in handleDelte", error)
      toast.error("Failed to delete note")

      
    }
    
  }
  return <Link to={`/note/${note._id}`}
    className="card bg-base-100 mt-2 pt-1 hover:shadow-lg transition-all duration-200 border-t-8 border-solid border-[#38ff74] p-5"

  >
    <div className="card-body  mb-0 mt-0 pb-1"></div>
    <h3 className="card-title text-base-content mb-3" >{note.title}</h3>
    <p className="text-base-content/90 line-clamp-3" >{note.content}</p>
    <div className="card-actions justify-between items-center mt-9">
      <span className="text-sm text-base-content/80">{ formatDate(new Date(note.createdAt))}</span>
      <div className="flex items-center gap-1">
        <PenSquareIcon className="size-4" />
        <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete (e, note._id)} >
          <Trash2Icon className="size-4" />
        </button>

      </div>
    </div>

  </Link>

}
export default NoteCard;