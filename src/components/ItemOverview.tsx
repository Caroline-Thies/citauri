export interface itemOverviewProps {
  contributors: String[];
  title: String;
  year: number;
  type: String;
  publisher?: String;
  onlineAddress?: String;
  fileType?: String;
  lastUpdated?: Date;
  lastChecked?: Date;
  abstract?: String;
  keywords?: String[];
  categories?: String[];
  evaluation?: number;
  image?: String;
  itemId: String;
}

export default function ItemOverview(props: itemOverviewProps) {
  const publisher = props.publisher ? props.publisher : "";
  const onlineAddressText = props.onlineAddress
    ? "Online verfügbar unter " + props.onlineAddress + "."
    : "";
  const fileTypeText = props.fileType ? props.fileType + "," : "";
  const lastUpdatedText = props.lastUpdated
    ? "zuletzt aktualisiert am " + props.lastUpdated.toLocaleDateString("de-DE")
    : "";
  const lastCheckedText = props.lastChecked
    ? "zuletzt geprüft am " +
      props.lastChecked.toLocaleDateString("de-DE") +
      "."
    : "";
  const abstract = props.abstract ? props.abstract : "";
  const keywords = props.keywords ? props.keywords.join(", ") : [];
  const categories = props.categories ? props.categories : [];
  const evaluation = props.evaluation ? props.evaluation : 0;
  const image = props.image ? props.image : "no-image.jpg";
  const imagePath = process.env.PUBLIC_URL + "/cover-images/" + image;

  return (
    <div className="flexcol fixed-table alignleft paddedChildren">
      <div className="flexrow small">
        <div>{props.type}</div>
        <div>
          {props.contributors.join(", ")} ({props.year}):
        </div>
      </div>
      <div className="flexrow">
        <div>
          <img src={imagePath} width={140} height={200} />
        </div>
        <div className="flexcol">
          <p className="large">{props.title}.</p>
          <div className="small">
            {publisher}. {onlineAddressText} {fileTypeText} {lastUpdatedText}{" "}
            {lastCheckedText}
          </div>
        </div>
      </div>
      <div className="flexrow">
        <div>Abstract:</div>
        <div className="small">{abstract}</div>
      </div>
      <div className="flexrow">
        <div>Schlagwörter:</div>
        <div className="small">{keywords}</div>
      </div>
      <div className="flexrow ignleft">
        <div>Kategorien:</div>
        <div className="small">{categories}</div>
      </div>
    </div>
  );
}
