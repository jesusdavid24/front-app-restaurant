export function getReviewsWithUser(reviews = [], users = []) {
  const reviewsWithUser = reviews.map((review) => {
    const userForReview = users.find((user) => user.id === review.userId);
    return {
      ...review,
      user: userForReview,
    };
  });

  return reviewsWithUser;
}
