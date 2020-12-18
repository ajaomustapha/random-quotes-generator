let generateBtn = document.getElementById('generate');
let randomQuote = document.getElementById('quotes');

const quotes = [
    "Victory is always possible for the person who refuses to stop fighting.",
	'Great works are performed not by strength,but perseverance.',
	'Success is predictable.',
    'Society may predict, but only I can determine my destiny.',
	'I have tried 99 times and have failed, but on the 100th time came success.',
	'The habit of persistence is the habit of victory.',
	'Excellence is not being the best it is doing your best.',
	'Happiness is the highest level of success.',
	'Life is only what we choose to make it.',
	'In every problem there is a hidden treasure inside. It\'s your job to find it.',
	'Anyone who has never made a mistake has never tried anything new.',
    '80% of success is showing up.',
    'If you think you can or if you think you can\'t, either way you are right.'
];

const generateQuote = () => {
	let unique = Math.floor(Math.random() * quotes.length);

	randomQuote.innerHTML = quotes[unique];
};

generateBtn.addEventListener('click', generateQuote);


