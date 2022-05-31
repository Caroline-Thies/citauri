import { emit } from "@tauri-apps/api/event";
import { useState } from "react";

export interface litCardProps {
  contributors: String[];
  title: String;
  year: number;
  type: String;
  itemId: String;
}

const LitCard = (props: litCardProps) => {
  const [text, setText] = useState("");
  const contributor_string = props.contributors.join(", ");

  const id = "LitItem" + props.itemId;

  let selectCard = () => {
    if (window.__TAURI_METADATA__) {
      emit("select-litItem", { itemId: props.itemId });
    }
  };

  return (
    <div className="flexcol alignleft" id={id} onClick={selectCard}>
      <div className="small">{contributor_string}</div>
      <div className="bold">{props.title}</div>
      <div className="small">
        {props.year} - {props.type}
      </div>
      <div>{text}</div>
    </div>
  );
};
export default LitCard;
