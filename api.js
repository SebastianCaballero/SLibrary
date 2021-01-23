function printData(data) {
    const dataContent = document.getElementById("question-container");

    let html = ``;

    data.forEach(element => {
        html += `<div class="col-md-4 mt-3">
                    <div class="card h-100">
                        <div class="card-body">
                            ${element.question}
                        </div>
                    </div>
                </div>`;
    });
    dataContent.innerHTML = html;

}

function printQuestions() {
    const total = document.getElementById('control').value;

    let url = `https://opentdb.com/api.php?amount=${total}`;

    fetch(url)
    .then(response => response.json())
    .then(data => printData(data.results));
}





