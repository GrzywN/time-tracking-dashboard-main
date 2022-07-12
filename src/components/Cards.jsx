import Card from "./Card";
import reportData from "../data/data.json";

export default function Cards() {
  let id = 0;
  const CardComponents = reportData.map((e) => {
    id += 1;
    return <Card key={id} title={e.title} />;
  });

  return CardComponents;
}
