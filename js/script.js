const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.nav')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('expanded')) {
    event.target.classList.toggle('expanded');
  } else {
    var expandedImages = document.querySelectorAll('.expanded');
    expandedImages.forEach(function(img) {
      img.classList.remove('expanded');
    });
  }
});

// Expand view for images
function expandImage(imageId) {
  var img = document.getElementById(imageId);
  img.classList.toggle('expanded');
  event.stopPropagation();
}