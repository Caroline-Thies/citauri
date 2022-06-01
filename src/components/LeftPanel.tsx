import { createRef, useEffect } from "react";
import { litCardProps } from "./LitCard";
import LitCardList from "./LitCardList";

interface leftPanelProps {
  litItems: litCardProps[];
  leftWidth: number | undefined;
  setLeftWidth: (value: number) => void;
}

export default function LeftPanel(props: leftPanelProps) {
  const leftRef = createRef<HTMLDivElement>();

  useEffect(() => {
    console.log("current: " + leftRef.current);
    if (leftRef.current) {
      if (!props.leftWidth) {
        props.setLeftWidth(leftRef.current?.clientWidth);
        console.log("client width: " + leftRef.current?.clientWidth);
        return;
      }

      leftRef.current.style.width = props.leftWidth + "px";
    }
  }, [leftRef, props.leftWidth, props.setLeftWidth]);

  return (
    <div ref={leftRef}>
      <LitCardList litItems={props.litItems} />
    </div>
  );
}
