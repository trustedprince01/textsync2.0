
export const handleScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'  // Triggers animation a bit earlier
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Setup continuous scrolling for carousels
  const setupContinuousScrolling = () => {
    const carousels = document.querySelectorAll('.carousel-content');
    carousels.forEach(carousel => {
      if (carousel) {
        const scrollContent = carousel.querySelector('.carousel-scroll');
        if (scrollContent) {
          scrollContent.classList.add('animate-scroll');
        }
      }
    });
  };

  // Call this after a short delay to ensure all elements are rendered
  setTimeout(setupContinuousScrolling, 500);
  
  return () => {
    animatedElements.forEach(element => {
      observer.unobserve(element);
    });
  };
};
