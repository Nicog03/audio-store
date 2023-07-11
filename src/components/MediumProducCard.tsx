import classes from "./MediumProductCard.module.css";

const MediumProductCard = () => {
  return (
    <>
      <div className={classes.cardContainer}>
        <img src="src/assets/png/headset.png" alt="image of a headphone" />

        <div className={classes.info}>
          <h3>TMA - 2 HD Wireless</h3>
          <p>USD 350</p>
        </div>
      </div>
    </>
  );
};

export default MediumProductCard;
