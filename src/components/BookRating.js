import React, { useState } from "react";
import { Rating, Button, Textarea } from "@nextui-org/react";

const BookRating = ({ bookId, onSubmitRating }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    onSubmitRating(bookId, { rating, review });
    setRating(0);
    setReview("");
  };

  return (
    <div className="space-y-4">
      <Rating value={rating} onChange={setRating} />
      <Textarea
        placeholder="Write your review here..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <Button color="primary" onPress={handleSubmit}>
        Submit Review
      </Button>
    </div>
  );
};

export default BookRating;
