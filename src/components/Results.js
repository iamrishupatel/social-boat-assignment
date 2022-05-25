import Card from "./Card";

const Results = ({ videos }) =>
  videos.map((videoData) => <Card data={videoData} key={videoData.heading} />);

export default Results;
