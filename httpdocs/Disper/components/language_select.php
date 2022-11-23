<div class="dropdown show">
    <a class="btn btn-language btn-secondary dropdown-toggle" style="background-color: transparent;
    border-color: transparent;" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="images/icon_awesome-globe.png">
    </a>

    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a class="dropdown-item ln-link" data-ln="en" href="#">English</a>
        <a class="dropdown-item ln-link" data-ln="de" href="#">Deutsch</a>
    </div>

</div>
<script>

    var links = document.getElementsByClassName("ln-link");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.href = window.location.toString().replace(location.search, "") + "?ln=" + link.getAttribute("data-ln");
    }

</script>