import React from "react";

export default function TestimonialItem({ testimonial }) {
  return (
    <div className="flex flex-col items-center p-6">
      <img
        src={testimonial.avatarUrl}
        alt={testimonial.name}
        className="rounded-full w-20 h-20 object-cover mb-4"
      />
      <p className="font-bold text-lg">{testimonial.name}</p>
      <p className="text-sm italic">{testimonial.role}</p>
      <p className="mt-2 text-center">{testimonial.comment}</p>
    </div>
  );
}
