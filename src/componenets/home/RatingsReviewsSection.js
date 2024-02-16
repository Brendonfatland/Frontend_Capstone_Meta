import React from "react";
import ReviewImage3 from "../../assets/Brendon.jpg";


const Review = ({ name, image, review }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img src={image} alt="Reviewer" className="h-10 w-10 rounded-full mr-4" />
        <p className="font-semibold text-lg">{name}</p>
      </div>
      <p className="text-gray-600">{review}</p>
    </div>
  );
};

const RatingsReviewsSection = () => {
  const reviews = [
    { name: "John Doe", image: ReviewImage3, review: "Great food and atmosphere!" },
    { name: "Jane Smith", image: ReviewImage3, review: "Excellent service and friendly staff." },
    { name: "Michael Johnson", image: ReviewImage3, review: "Delicious dishes and fast delivery." },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Ratings and Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Review key={index} name={review.name} image={review.image} review={review.review} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RatingsReviewsSection;


