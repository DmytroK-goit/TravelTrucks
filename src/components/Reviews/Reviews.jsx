import s from "./Reviews.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <div className={s.info}>
      <ul className={s.list_rew}>
        {reviews.map((review, index) => (
          <li key={index}>
            <div className={s.name_info}>
              <p className={s.name_item}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </p>
              <div>
                <p>
                  <strong>{review.reviewer_name}</strong>
                </p>
                <div className={s.stars}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={s.star}>
                      <use
                        href={`../../../public/sprite.svg#${
                          i < review.reviewer_rating
                            ? "icon-star"
                            : "icon-grey_star"
                        }`}
                      ></use>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className={s.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
