import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
  // const ButtonWaleed = styled.button({
  //   padding: "1rem 2rem",
  //   border: "none",
  //   fontSize: "1.2rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--btn-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // });
  const ButtonWaleed = styled.button`
    padding: 1rem 2rem;
    border: none;
    font-size: 1.2rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--btn-color);
    font-weight: bold;
    cursor: pointer;
  `;
  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  return (
    <li className={styles.card}>
      <div>
        <img
          src={img_url}
          alt={name}
          // style={{ width: "350px", height: "250px" }}
        />
      </div>
      {/* <div className={styles["card-content"]}> */}
      <div className="flex flex-col gap-4 py-[3.2rem] px-[1.2rem]">
        <h2>Name: {name}</h2>
        <Rating>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <div>
          <a
            href={watch_url}
            target="_blank"
            style={{ display: "inline-block" }}
          >
            {/* <button style={btn_style}>Watch Now</button> */}
            <ButtonWaleed rating={rating}>Watch Now</ButtonWaleed>
          </a>
        </div>
      </div>
    </li>
  );
};
