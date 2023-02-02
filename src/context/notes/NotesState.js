import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63da5b0577ee46d6c0742a00sad",
      title: "Harshu",
      description: "CPPDSA",
      tag: "Personal",
      date: "2023-02-01T12:28:53.224Z",
      __v: 0,
    },
    {
      _id: "63da5b0777ee46d6cs0742a02ssd",
      title: "Harshu",
      description: "CPPDSA",
      tag: "Personal",
      date: "2023-02-01T12:28:55.088Z",
      __v: 0,
    },
    {
      _id: "63da5b0777ees46d6c0742a04ff",
      title: "Harshu",
      description: "CPPDSA",
      tag: "Personal",
      date: "2023-02-01T12:28:55.189Z",
      __v: 0,
    },
    {
      _id: "63da5b0777aee46dd6c0742a06xx",
      title: "Harshu",
      description: "CPPDSA",
      tag: "Personal",
      date: "2023-02-01T12:28:55.647Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // Add a Note

  const addNote = (title, description, tag) => {
    console.log("Adding a new Note");
    const note = {
      _id: "63da5b0777aee46dd6c0742a06xx",
      title: title,
      description: description,
      tag: tag,
      date: "2023-02-01T12:28:55.647Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note

  const deleteNote = (id) => {
    console.log("Deleted" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note

  const editNote = (id) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
