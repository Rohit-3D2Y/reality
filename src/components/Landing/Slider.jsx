import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John D.',
    role: 'Customer',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    message:
      'IntelRealty has made managing my properties so much easier. The platform is user-friendly and has everything I need to keep track of my properties.',
  },
  {
    name: 'Michael S.',
    role: 'Customer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    message:
      'Since we started using Intel Realty, our property management tasks have become much more efficient. The Chat features are particularly useful for our management tracking.',
  },
  {
    name: 'David K.',
    role: 'Customer',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    message:
      'Intel Realty has streamlined our operations. The automation and reporting tools are powerful and easy to use.',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  
  const next = () =>
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      result.push({ ...testimonials[index], originalIndex: index, position: i });
    }
    return result;
  };

  return (
    <div className="py-8 px-4 md:px-12 bg-white">
      <h2 className="text-4xl font-semibold tracking-tighter text-center mb-10">Customer <span className='text-orange-400'>Experiences</span> That Speak Volumes</h2>
      <div className="relative flex items-center justify-center">
        {/* Cards Container */}
        <div className="flex items-center justify-center space-x-6 mt-20 overflow-hidden max-w-5xl">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.originalIndex}-${currentIndex}`}
              className={`transition-all duration-300 transform ${
                testimonial.position === 0 
                  ? 'scale-100 opacity-100 z-10' 
                  : 'scale-95 opacity-50 hidden md:block'
              } w-80 bg-orange-50 rounded-xl p-6 shadow-md flex-shrink-0`}
            >
              <p className="text-sm text-gray-500 font-medium mb-2">STORIES</p>
              <p className="text-lg font-medium text-gray-800 mb-6">
                {testimonial.message}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <Quote className="w-6 h-6 mt-4 ml-auto text-black" />
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="absolute -top-2 right-4 md:right-10 flex gap-3">
          <button
            onClick={prev}
            className="bg-orange-300 hover:bg-orange-200 rounded-full p-3 transition"
          >
            <ArrowLeft className="text-black" />
          </button>
          <button
            onClick={next}
            className="bg-orange-300 hover:bg-orange-200 rounded-full p-3 transition"
          >
            <ArrowRight className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;