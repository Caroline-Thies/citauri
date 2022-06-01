interface pdfPaneProps {
  src: string;
}

export default function PdfPane(props: pdfPaneProps) {
  return (
    <div className="fullwinheight padding">
      <iframe
        className="fullcontheight xyscrollable"
        src={props.src + "#view=fitH"}
        title="media preview"
      />
    </div>
  );
}
