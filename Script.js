document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const answer = document.getElementById('q1').value.trim().toLowerCase();
  const result = document.getElementById('quiz-result');
  if (answer === 'children') {
    result.textContent = 'Correct!';
    result.style.color = 'green';
  } else {
    result.textContent = 'Incorrect. The correct answer is "children".';
    result.style.color = 'red';
  }
});