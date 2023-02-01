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

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
