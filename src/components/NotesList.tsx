import React from "react";
import { Note } from "../models/note.model";
import { ICreateNotesProps } from "./CreateNotes";
import Notes from "./Notes";

const NotesList: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    const filterdata = notes.filter((node: Note) => node.id !== id);
    setNotes(filterdata);
  };
  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>
        {notes.map((note) => {
          return (
            <Notes key={note.id} note={note} handleDelete={handleDelete} />
          );
        })}
      </div>
    </>
  );
};

export default NotesList;
