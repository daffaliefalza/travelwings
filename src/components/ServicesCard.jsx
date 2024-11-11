const ServicesCard = (props) => {
  const { title, description } = props;

  return (
    <div className="services-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default ServicesCard;
