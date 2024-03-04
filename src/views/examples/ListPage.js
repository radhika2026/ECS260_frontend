import React from "react";
import List from "components/List";

const researchPapers = [
  { title: "Research Paper 1", description: "This is the description for Research Paper 1." },
  { title: "Research Paper 2", description: "This is the description for Research Paper 2." },
  { title: "Research Paper 3", description: "This is the description for Research Paper 3." },
  // Add more papers as needed
];

export default function ListPage() {
  return (
    <div>
      <List researchPapers= { researchPapers} />
    </div>
  );
}
