import LitCard, { litCardProps } from "./LitCard";

interface LitCardListProps {
  litItems: litCardProps[];
}

export default function LitCardList(props: LitCardListProps) {
  return (
    <div className="flexcol paddedChildren alternateColors scrollable">
      {props.litItems.map((litItem, index) => (
        <LitCard {...litItem} key={index} />
      ))}
    </div>
  );
}
