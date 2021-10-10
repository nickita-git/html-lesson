var desk = document.getElementById("desk");
for (var i = 0; i < 8; i++)
{
    for (var j = 0; j < 8; j++)
    {
        var field = document.createElement("div");
        field.classList.add("field");
        if ((i + j) % 2 == 1)
            field.style.background = "#6180ad";
            field.style.backgroundSize = "cover";
        desk.appendChild(field);
    }
}
var fields = desk.children;
for (var i = 0; i < 8; i+=7)
{
    for (var j = 0; j < 8; j++)
    {
        fields[(i + 1  + (-2) * (i % 2)) * 8 + j].style.backgroundImage = `url('static/${50 + ((i + 1) % 2)}.png')`;
    }
    fields[i].style.backgroundImage = "url('static/41.png')";
    fields[63 - i].style.backgroundImage = "url('static/40.png')";
    fields[i + 1 + (-2) * (i % 2)].style.backgroundImage = "url('static/31.png')";
    fields[63 - (i + 1 + (-2) * (i % 2))].style.backgroundImage = "url('static/30.png')";
    fields[i + 2 + (-4) * (i % 2)].style.backgroundImage = "url('static/21.png')";
    fields[63 - (i + 2 + (-4) * (i % 2))].style.backgroundImage = "url('static/20.png')";
    fields[(63 + 4 + (-8) * (i % 2)) % 64].style.backgroundImage = `url('static/${10 + ((i + 1) % 2)}.png')`;
    fields[(63 + 5 + (-8) * (i % 2)) % 64].style.backgroundImage = `url('static/0${(i + 1) % 2}.png')`;
}