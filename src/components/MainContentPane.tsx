import ItemOverview from "./ItemOverview";
import LitCardList from "./LitCardList";
import PdfPane from "./PdfPane";
import { itemOverviewContent, litItems, pdfPath } from "../mockData";
import { useEffect, useState } from "react";
import LeftPanel from "./LeftPanel";

interface mainContentPaneProps {}

export default function MainContentPane(props: mainContentPaneProps) {
  const [leftWidth, setLeftWidth] = useState<undefined | number>(undefined);
  const [separatorXPositionLeft, setSeparatorXPositionLeft] = useState<
    undefined | number
  >(undefined);
  const [draggingLeft, setDraggingLeft] = useState(false);

  const MIN_WIDTH_LEFT = 50;

  const onMouseDownLeft = (e: React.MouseEvent) => {
    setSeparatorXPositionLeft(e.clientX);
    setDraggingLeft(true);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (draggingLeft && leftWidth && separatorXPositionLeft) {
      const newLeftWidth = leftWidth + e.clientX - separatorXPositionLeft;
      setSeparatorXPositionLeft(e.clientX);
      setLeftWidth(newLeftWidth);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  const onMouseUp = () => {
    setDraggingLeft(false);
    console.log("mouse up");
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  return (
    <div className="flexrow" id="main_content">
      <LeftPanel
        litItems={litItems}
        leftWidth={leftWidth}
        setLeftWidth={setLeftWidth}
      />
      <div className="divider" onMouseDown={onMouseDownLeft} />
      <div>
        <ItemOverview {...itemOverviewContent} />
      </div>
      <div className="divider" />
      <div>
        <PdfPane src={pdfPath} />
      </div>
    </div>
  );
}
