document.addEventListener('DOMContentLoaded', function () {
    const loadingIcon = document.getElementById('loading-ring');
    const homeContent = document.getElementById('home');
    const navigation = document.getElementById('heading');
    loadingIcon.style.display = 'grid'; // Show the loading icon
    homeContent.style.display = 'none';
    navigation.style.display = 'none';


    // Hide the loading icon after a few seconds (e.g., 3 seconds)
    setTimeout(function () {
      loadingIcon.style.display = 'none'; // Hide the loading icon
      homeContent.style.display = 'block';
      navigation.style.display = 'block';
    }, 2500); // Change 3000 to the desired number of milliseconds (e.g., 3000 = 3 seconds)
  });