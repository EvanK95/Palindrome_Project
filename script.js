document.getElementById('check-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value.trim();
    const resultElement = document.getElementById('result');

    if (textInput === "") {
        alert("Please input a value");
        return;
    }

    const normalizedText = textInput.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = normalizedText.split('').reverse().join('');

    if (normalizedText === reversedText) {
        resultElement.textContent = `${textInput} is a palindrome`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `${textInput} is not a palindrome`;
        resultElement.style.color = 'red';
    }
});
