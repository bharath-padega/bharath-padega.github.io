document.addEventListener('DOMContentLoaded', function() {
    const tasks = [
        { number: 1, name: 'Expectation Document' },
        { number: 2, name: 'Basic HTML Styling' },
        { number: 3, name: 'CSS Hover' },
        { number: 4, name: 'Welcome to JS' },
        { number: 5, name: 'Calculator with JS' },
        { number: 6, name: 'GitHub Integration' },
        { number: 7, name: 'Console Output' },
        { number: 8, name: 'String Operation' },
        { number: 9, name: 'Conditions' },
        { number: 10, name: 'Call-Stack with Array' },
        { number: 11, name: 'Star with Loops' },
        { number: 12, name: 'Class Work' },
        { number: 13, name: 'Class Work - Objects' },
        { number: 14, name: 'Class Work - Objects 2', suffix: 'a' },
        { number: 14, name: 'Class Work - Functions', suffix: 'b' },
        { number: 15, name: 'Class Work - Class & Bootstrap' },
        { number: 16, name: 'Class Work - JSON' }
    ];

    const navbar = document.getElementById('navbar');
    tasks.forEach(task => {
        const button = document.createElement('button');
        button.className = 'button';
        button.innerHTML = `Task ${task.number}${task.suffix || ''}: ${task.name}`;
        button.onclick = function() {
            const iframe = document.createElement('iframe');
            iframe.src = 'works/task' + task.number + (task.suffix ? task.suffix : '') + '/task' + task.number + (task.suffix ? task.suffix : '') + '.html';
            iframe.style.width = '100%';
            iframe.style.height = '90vh';
            iframe.style.border = 'none';
            document.getElementById('mainContent').innerHTML = '';
            document.getElementById('mainContent').appendChild(iframe);
        };
        const mainContent = document.getElementById('mainContent');

        navbar.querySelectorAll('.button').forEach(button => {
            button.addEventListener('click', function() {

                mainContent.scrollIntoView({ behavior: 'smooth' });
            });
        });
        navbar.appendChild(button);
    });
});

