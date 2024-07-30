document.getElementById('Increment').addEventListener('click',IncrementCounter);
document.getElementById('Decrement').addEventListener('click',DecrementCounter);
document.getElementById('reset').addEventListener('click',Reset);

let countDisplay=document.getElementById('CounterDisplay');
let counterValue=0;

function updateCounterDisplay()
{
 countDisplay.textContent = counterValue;
}

function IncrementCounter()
{
 counterValue++;
 updateCounterDisplay();
}

function DecrementCounter()
{
 if(counterValue > 0)
  counterValue--;
 updateCounterDisplay();
}

function Reset()
{
 counterValue=0;
 updateCounterDisplay();
}