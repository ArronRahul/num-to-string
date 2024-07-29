function numToEng(num) {
    if (num < 0 || num > 999) {
        throw new Error('Number must be between 0 and 999 inclusive.');
    }

    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function convertLessThanHundred(n) {
        if (n < 10) return ones[n];
        if (n < 20) return teens[n - 10];
        const ten = Math.floor(n / 10);
        const one = n % 10;
        return one === 0 ? tens[ten] : `${tens[ten]} ${ones[one]}`;
    }

    function convertLessThanThousand(n) {
        if (n < 100) return convertLessThanHundred(n);
        const hundred = Math.floor(n / 100);
        const rest = n % 100;
        return rest === 0 ? `${ones[hundred]} hundred` : `${ones[hundred]} hundred ${convertLessThanHundred(rest)}`;
    }

    return convertLessThanThousand(num);
}

const input = document.querySelector('#numberInput');
const output = document.querySelector('#output');
const btn = document.querySelector('#submitButton');

btn.addEventListener('click', () => {
    console.log("Button clicked");
    const number = parseInt(input.value, 10); 
    if (999<number) {
        output.textContent = 'Please enter a valid number';
    } else {
        output.textContent = numToEng(number); 
    }
});
