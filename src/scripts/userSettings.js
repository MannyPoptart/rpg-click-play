// Update volume display and save the selected volume in localStorage
function updateVolume() {
  const volumeRange = document.getElementById('volumeRange').value;
  document.getElementById('volumePercentage').innerText = `${volumeRange}%`;
  localStorage.setItem('selectedVolume', volumeRange); // Save volume in localStorage
}

window.onload = function() {
  // Get the elements after DOM is loaded
  const userSettingsBar = document.getElementById('userSettingsBar');
  const closeSettingsButton = document.getElementById('closeSettings');
  const settingsButton = document.getElementById('settingsButton');

  // Toggle visibility of the settings bar
  function toggleSettings() {
    userSettingsBar.classList.toggle('hidden');

    // If the settings bar is visible, set focus to the first input field
    if (!userSettingsBar.classList.contains('hidden')) {
      document.getElementById('volumeRange').focus();
    }
  }

  // Add event listener to the "Settings" button
  settingsButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    toggleSettings();
  });

  // Close settings when the "X" button is clicked
  closeSettingsButton.addEventListener('click', function() {
    userSettingsBar.classList.add('hidden'); // Hide settings bar when "X" is clicked
  });

  // Add event listener to update the volume display when input changes
  document.getElementById('volumeRange').addEventListener('input', updateVolume);

  // Initialize the correct volume display on page load
  const savedVolume = localStorage.getItem('selectedVolume');
  
  if (savedVolume) {
    // Set range and display to saved value
    document.getElementById('volumeRange').value = savedVolume;
    document.getElementById('volumePercentage').innerText = `${savedVolume}%`;
  } else {
    // Set default volume if no saved value exists
    document.getElementById('volumeRange').value = 40;
    document.getElementById('volumePercentage').innerText = '40%';
  }
};
