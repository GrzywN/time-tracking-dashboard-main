import Card from "./Card";
import reportData from "../data/data.json";

export default function Cards() {
  const currentTimeframe = "weekly";

  let id = 0;
  const CardComponents = reportData.map((e) => {
    id += 1;
    const { current } = e.timeframes[currentTimeframe];
    const { previous } = e.timeframes[currentTimeframe];
    return (
      <Card key={id} title={e.title} current={current} previous={previous} />
    );
  });

  return CardComponents;
}
