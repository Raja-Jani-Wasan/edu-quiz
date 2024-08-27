// Function to display questions and options on the HTML page
function displayQuestions() {
    const questionContainer = document.getElementById('questions-list');
    questions.forEach((questionObj) => {
        // Create a container for each question
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        // Create and append the question title with number
        const questionTitle = document.createElement('h2');
        questionTitle.textContent = `${questionObj.numb}. ${questionObj.question}`;
        questionDiv.appendChild(questionTitle);

        // Create and append options
        const optionsList = document.createElement('ul');
        questionObj.options.forEach(option => {
            const listItem = document.createElement('li');
            listItem.textContent = option;
            listItem.onclick = () => {
                // Clear any previous selections
                Array.from(listItem.parentNode.children).forEach(li => li.classList.remove('correct', 'incorrect'));
                // Mark correct or incorrect
                if (option === questionObj.answer) {
                    listItem.classList.add('correct');
                } else {
                    listItem.classList.add('incorrect');
                }
            };
            optionsList.appendChild(listItem);
        });

        questionDiv.appendChild(optionsList);

        // Append the question container to the main container
        questionContainer.appendChild(questionDiv);
    });
}

// Function to toggle correct answers
function toggleAnswers() {
    const button = document.getElementById('toggle-button');
    const correctAnswersShown = document.querySelectorAll('.correct').length > 0;

    if (correctAnswersShown) {
        hideCorrectAnswers();
        button.textContent = 'Show Correct Answers';
    } else {
        showCorrectAnswers();
        button.textContent = 'Hide Correct Answers';
    }
}

// Function to show correct answers
function showCorrectAnswers() {
    const questionDivs = document.querySelectorAll('.question');
    questionDivs.forEach((div, index) => {
        const options = div.querySelectorAll('li');
        options.forEach(option => {
            if (option.textContent === questions[index].answer) {
                option.classList.add('correct');
            }
        });
    });
}

// Function to hide correct answers
function hideCorrectAnswers() {
    const correctAnswers = document.querySelectorAll('.correct');
    correctAnswers.forEach(answer => {
        answer.classList.remove('correct');
    });
}

// Call the function to display questions when the script loads
displayQuestions();
