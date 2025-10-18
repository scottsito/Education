function Search() {
    // Query for result
    document.getElementById("searches").innerHTML =
    `
    <div style="padding: 10px">
        <div class="card" style="margin: auto; width: 50%; padding: 10px;">
            <p>Search: ${ document.getElementById("search").value }</p>
            <div class="card-body" style="text-align: center;">
                <img class="card-img-top" src="https://minotar.net/skin/${document.getElementById("search").value}" style="image-rendering: pixelated;"></img>
            </div>
        </div>
    </div>
    ` + document.getElementById("searches").innerHTML;

    document.getElementById("search").value = "";

    return false;
}