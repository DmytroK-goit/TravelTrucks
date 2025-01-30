export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review, index) => (
        <li key={index}>
          <p>
            <strong>{review.reviewer_name}</strong>
          </p>
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};
