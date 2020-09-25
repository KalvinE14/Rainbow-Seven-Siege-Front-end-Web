var $this = $('#slider');
 
var slidesContainer = $this.children('.imgSliderContainer');
 
var slides = slidesContainer.children('.img');   

var arrows = $this.children('.arrows');
var prevSlide = arrows.children('.prev');
var nextSlide = arrows.children('.next');

var slidesCount = slides.length;

var currentSlide = slides.first();
var currentSlideIndex = 1;

slides.not(':first').css('display', 'none');
currentSlide.addClass('active');

function nextFade() 
{
  currentSlide.removeClass('active').fadeOut(500);

  if(currentSlideIndex == slidesCount) 
  {
      currentSlide = slides.first();
      currentSlide.delay(500).addClass('active').fadeIn(500);
      currentSlideIndex = 1;
  } else 
  {
      currentSlideIndex++;
      currentSlide = currentSlide.next();
      currentSlide.delay(500).addClass('active').fadeIn(500);
  }
}

function prevFade() 
{
  currentSlide.removeClass('active').fadeOut(500);

  if(currentSlideIndex == 1) 
  {
      currentSlide = slides.last();
      currentSlide.delay(500).addClass('active').fadeIn(500);
      currentSlideIndex = slidesCount;
  } else 
  {
      currentSlideIndex--;
      currentSlide = currentSlide.prev();
      currentSlide.delay(500).addClass('active').fadeIn(500);
  }
}

$(nextSlide).click(function(e) 
{
  e.preventDefault();
  nextFade();
});

$(prevSlide).click(function(e) 
{
  e.preventDefault();
  prevFade();
});