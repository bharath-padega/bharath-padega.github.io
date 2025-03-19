
const works = {
    "task1" : {"title" : "Project 1", "url" : "works/task1/index.html"},
    "task2" : {"title" : "Project 2", "url" : "works/task2/index.html"},
    "task3" : {"title" : "Project 3", "url" : "works/task3/index.html"},
    "task4" : {"title" : "Project 4", "url" : "works/task4/index.html"},
    
};

function loadContent(taskKey) {
    const frame = '<iframe style="width:100%; height:100%" src="' + works[taskKey].url + '"></iframe>';
    document.getElementById('content').innerHTML = frame;
}
