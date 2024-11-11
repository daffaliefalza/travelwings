const DestinationCard = (props) => {
  const { image, title, description } = props;

  return (
    <div className="destination-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default DestinationCard;
