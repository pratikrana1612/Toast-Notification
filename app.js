const btn=document.querySelector("button");
const message_adder = document.querySelector('.message_adder');
// const messages = [];

btn.addEventListener('click',() =>
{
    const span = document.createElement('span');
    span.className='span';
    span.style.color = `rgba(${randomGenerator(255)},${randomGenerator(255)},${randomGenerator(255)})`;
    span.textContent='Message ' + TextGenerator();
    message_adder.append(span);
    // messages.push(span);

    setTimeout(() => {
        if(span)
        {
            span.remove();
            // messages.shift();
        }
    }, 3000);
})

function randomGenerator(max)
{
    return Math.round(Math.random()*max);
}

function TextGenerator()
{
    const num=randomGenerator(4);
    switch(num)
    {
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        default:
            return 'Two';
    }
}

