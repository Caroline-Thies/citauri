export interface litCardProps {
  contributors: String[];
  title: String;
  year: number;
  type: String;
  itemId: String;
}

const LitCard = (props: litCardProps) => {
  const contributor_string = props.contributors.join(", ");

  const id = "LitItem" + props.itemId;

  return (
    <div className="flexcol alignleft" id={id}>
      <div className="small">{contributor_string}</div>
      <div className="bold">{props.title}</div>
      <div className="small">
        {props.year} - {props.type}
      </div>
    </div>
  );
};
export default LitCard;
