const floatingComponent = document.querySelector('.floating');
const content = document.querySelector('.content');

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Adjust the offset value to control when the component starts floating
  const offset = 200;

  if (scrollY >= offset) {
    floatingComponent.style.transform = `translateY(${scrollY - offset}px)`;
  } else {
    floatingComponent.style.transform = 'translateY(0)';
  }
});
