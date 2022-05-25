const Card = ({ data }) => {
  const { heading, video, tags } = data;
  return (
    <div className="card">
      <video src={video} controls />

      <div className="details">
        <h2>{heading}</h2>
        <div className="tags">
          {tags.map((tag, index) => (
            <strong key={index}>{tag}</strong>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Card;
