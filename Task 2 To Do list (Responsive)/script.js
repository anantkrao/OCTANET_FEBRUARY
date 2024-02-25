   // Search function
function searchTask() {
    var searchQuery = document.getElementById("searchInput").value.trim().toLowerCase();
    var tasks = document.getElementById("taskList").getElementsByTagName("li");
    var taskReview = document.getElementById("task_Review");

    for (var i = 0; i < tasks.length; i++) {
        var taskText = tasks[i].textContent.toLowerCase();
        if (taskText.includes(searchQuery)) {
            tasks[i].style.display = "block";
            taskReview.style.display = "block";
        } else {
            tasks[i].style.display = "none";
            taskReview.style.display = "block";
            alert("The task was not added. Please make sure to enter a valid task.");
        }
    }
}
document.getElementById("todoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        // Create a checkbox
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                newTask.style.cssText = "text-decoration: line-through;"; // Apply line-through effect
                alert("Marked as completed!!");
                newTask.remove(); // Remove the task from the list
            } else {
                newTask.style.cssText = "text-decoration: none;"; // Remove line-through effect
            }
        });
        // Append the checkbox and task text to the list item
        newTask.appendChild(document.createTextNode(taskText));
        newTask.appendChild(checkbox);
        taskList.appendChild(newTask);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
});

// Function to clear all tasks
function clearAllTasks() {
    var taskList = document.getElementById("taskList");
    var datalist = document.getElementById("dt");
    alert("All task deleted!");
    taskList.innerHTML = "";
    datalist.innerHTML = "";
}

// Event listener for form submission
document.getElementById("todoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form input values
    var taskType = document.getElementById('selecttask').value;
    var textbox = document.getElementById('textbox').value;
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    
    // Insert new row into task table
    var table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    
    cell1.innerHTML = taskType;
    cell2.innerHTML = textbox;
    cell3.innerHTML = startDate;
    cell4.innerHTML = endDate;
    
    // Clear form fields after submission
    document.getElementById('selecttask').selectedIndex = 0;
    document.getElementById('textbox').value = '';
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
});

// Event listeners for various buttons
var modal = document.getElementById("todoForm");
var title = document.getElementById("title");
var btn = document.getElementById("btn");
var entry_form = document.getElementById("entry_form");
var features = document.getElementById("features");
btn.onclick = function() {
    modal.style.display = "block";
    title.style.display = "none"; 
    taskTable.style.display = "none";
    showdata.style.display = "none";
    showTask.style.display = "none";
    features.style.display = "none";
    if(isWeb()){
        console.log("Web Version Detected");
        entry_form.style.backgroundImage = "url(assets/chess.jpg)";
    }
    else{
        console.log("Mobile Version Detected");
        entry_form.style.backgroundImage = "url(assets/dipesh-shrestha-Diyc9vVaSqM-unsplash.jpg)";
    }
    function isWeb() {
        return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }
}

var showTask = document.getElementById("task_Review");
var bttn = document.getElementById("bttn");
bttn.onclick = function() {
    showTask.style.display = "block";
    modal.style.display = "none";
    taskTable.style.display = "none";
    title.style.display = "none";
    showdata.style.display = "none";
    features.style.display = "none";
    if(isWeb()){
        console.log("Web Version Detected");
        entry_form.style.backgroundImage = "url(assets/chess.jpg)";
    }
    else{
        console.log("Mobile Version Detected");
        entry_form.style.backgroundImage = "url(assets/dipesh-shrestha-Diyc9vVaSqM-unsplash.jpg)";
    }
    function isWeb() {
        return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }
}

var newtask = document.getElementById("todoForm");
var review = document.getElementById("task_Review");
var closebtn = document.getElementById("close");
closebtn.onclick = function(){
    newtask.style.display = "none";
    review.style.display = "none";
    taskTable.style.display = "none";
    taskTable.style.display = "none";
    title.style.display = "block";
    data.style.display = "none";
    features.style.display = "block";
    if(isWeb()){
        console.log("Web Version Detected");
        entry_form.style.backgroundImage = "url(assets/chess.jpg)";
    }
    else{
        console.log("Mobile Version Detected");
        entry_form.style.backgroundImage = "url(assets/dipesh-shrestha-Diyc9vVaSqM-unsplash.jpg)";
    }
    function isWeb() {
        return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }
}

var showdata = document.getElementById("data");
var databtn = document.getElementById("btttn");
databtn.onclick = function(){
    newtask.style.display = "none";
    review.style.display = "none";
    title.style.display = "none";
    taskTable.style.display = "block";
    showdata.style.display = "block";
}

var themeButton = document.getElementById("theme");
var body = document.body;

themeButton.addEventListener("click", function() {
    body.classList.toggle("light-theme");
});