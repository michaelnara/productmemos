<?php
$page = "home";
$page_title = "Home - Disper";
$url = "https://disper.com";
$type = "article";
$description = "Disper";
$locale = "en_EN";
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Disper">
    <title>Home Disper</title>

    <!-- Bootstrap core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <link href="disper_style.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="carousel.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">


    <?php include("components/page.php"); ?>
</head>
<body>
<nav class="navbar navbar-expand-lg nav-color fixed-top navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="home.php"><img src="images/logo_disper_.png" alt="logo" style="height: 3pc;">DISPER</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarToggler">
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#about-row" data-bs-toggle="collapse" data-bs-target="#navbarToggler" onclick="window.location.href='#about-row';">About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#approach-row" data-bs-toggle="collapse" data-bs-target="#navbarToggler" onclick="window.location.href='#approach-row';">Our approach</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#team-row" data-bs-toggle="collapse" data-bs-target="#navbarToggler" onclick="window.location.href='#team-row';">Our team</a>
                </li>
            </ul>
            <?php include ("components/global.php")?>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="btn btn-contact floatingbutton" href="#footer" data-bs-toggle="collapse" data-bs-target="#navbarToggler" onclick="window.location.href='#footer';">Contact us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<header>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active img-fluid carousel-background-image" style="" >

                <div class="jumbo_content">
                    <div class="jumbo_content_wrapper">
                        <h1 class="text-uppercase" style="font-weight: bold;font-size: 70px;">Disper</h1>
                        <h2 style="font-weight: 400"><?php echo $strings[$HEADER_SUBTITLE]; ?></h2>

                        <div class="btn-container">
                            <a class="btn btn-lg btn-contact" href="#footer"><?php echo $strings[$CONTACT_BTN]; ?></a>
                            <a class="btn btn-lg btn-approach" href="#approach-row"><?php echo $strings[$OUR_APPROACH]; ?></a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</header>

<main>

    <div class="container-fluid" style="background-color: #000; color: #fff">
        <div class="container" id="about-row">
            <div class="row">
                <div class="col-lg-3">
                    <div class="wrapper-who">
                        <h2><?php echo $strings[$WHO_WE_ARE]; ?></h2>
                        <div class="line"></div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-5">
                    <h1 class="home-page-h1 we-do-diff-class"><?php echo $strings[$WE_DO_DIFF_TITLE]; ?></h1>
                </div>
                <div class="col-lg-2">
                </div>
                <div class="col-lg-5">
                    <h2 class="home-page-h2"><?php echo $strings[$WE_DO_DIFF_TEXT]; ?>
                    </h2>
                </div>
            </div>

            <div class="row">
                <div class="container">
                    <div class="row" style="margin-top: 50px;margin-bottom: 50px;">


                        <div class="col-lg-3">
                            <div class="card1 text-center">
                                <div class="card-body">
                                    <img src="images/result%20white.png" width="50" height="50" class="card-icons">
                                    <h5 class="card-title"><?php echo $strings[$CARD_TITLE_1]; ?></h5>
                                    <p class="card-text"><?php echo $strings[$CARD_TEXT_1]; ?></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-1"></div>

                        <div class="col-lg-3">
                            <div class="card2 text-center">
                                <div class="card-body">
                                    <img src="images/innovation%20white.png" width="50" height="50" class="card-icons">
                                    <h5 class="card-title" style="margin-bottom: .5rem;"><?php echo $strings[$CARD_TEXT_2]; ?></h5>
                                    <p class="card-text"><?php echo $strings[$CARD_TEXT_2]; ?></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-1"></div>

                        <div class="col-lg-3">
                            <div class="card3 text-center">
                                <div class="card-body">
                                    <img src="images/expert%20white.png" width="50" height="50" class="card-icons">
                                    <h5 class="card-title"><?php echo $strings[$CARD_TEXT_3]; ?></h5>
                                    <p class="card-text"><?php echo $strings[$CARD_TEXT_3]; ?></p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>

    <div class="container" id="approach-row">
        <div class="row" style="margin-top: 80px;">
            <div class="col-lg-3">
                <div class="wrapper-who">
                    <h2><?php echo $strings[$OUR_APPROACH]; ?></h2>
                    <div class="line"></div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-5">
                <h1 class="home-page-h1"><?php echo $strings[$SECURE_FINANCE_TITLE]; ?></h1>
                <h2 class="home-page-h2"><?php echo $strings[$SECURE_FINANCE_TEXT]; ?></h2>
            </div>

            <div class="col-lg-2"></div>

            <div class="col-lg-5">
                <img src="images/pexels-pixabay-260024.png" class="img-fluid" style="width: 514px;height: 382px;object-fit: cover;">
            </div>
        </div>

        <div class="row" style="margin-top: 80px;">
            <div class="col-lg-5">
                <img src="images/karsten-winegeart-60GsdOMRFGc-unsplash.png" class="img-fluid" style="width: 514px;height: 382px;object-fit: cover;">
            </div>

            <div class="col-lg-2"></div>

            <div class="col-lg-5">
                <div class="wrapper-who display-line" style="width: 140px;">
                    <div class="line"></div>
                </div>
                <h1 class="home-page-h1"><?php echo $strings[$MARKET_CREATING_TITLE]; ?></h1>
                <h2 class="home-page-h2"><?php echo $strings[$MARKET_CREATING_TEXT]; ?></h2>
            </div>
        </div>

        <div class="row" style="margin-top: 80px;">
            <div class="col-lg-5">
                <div class="wrapper-who" style="width: 140px;">
                    <div class="line"></div>
                </div>
                <h1 class="home-page-h1"><?php echo $strings[$INCREASE_NUMB_TITLE]; ?></h1>
                <h2 class="home-page-h2"><?php echo $strings[$INCREASE_NUMB_TEXT]; ?> </h2>
            </div>

            <div class="col-lg-2"></div>

            <div class="col-lg-5">
                <img src="images/photo-1559526324-593bc073d938.png" class="img-fluid" style="width: 514px;height: 382px;object-fit: cover;">
            </div>
        </div>

        <div class="row" id="team-row" style="margin-top: 80px;margin-bottom: 80px;">
            <div class="col-lg-3">
                <div class="wrapper-who team-mobile-title">
                    <h2 class="team-mobile-text"><?php echo $strings[$OUR_TEAM]; ?></h2>
                    <div class="line team-mobile"></div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 offset-lg-3 text-center">
                    <p><?php echo $strings[$OUR_TEAM_TEXT]; ?></p>
                </div>
            </div>
        </div>
    </div>

    <!-- FOOTER -->
    <footer class="py-5 bg-dark page-foot" id="footer" style="background: linear-gradient(rgba(0,140,205,0.15), rgba(3,205,116,0.15)),url('images/ishant-mishra-osWDvhPlGLU-unsplash.jpg');
background-attachment: fixed; z-index: -1; background-position: center;">
        <div class="container" >
            <div class="row" style="color: #fff;">
                <div class="col-md-4 offset-md-2">
                    <div class="wrapper-who">
                        <h6 class="text-uppercase"><?php echo $strings[$WE_LOVE_TO_HEAR]; ?></h6>
                        <div class="line"></div>
                    </div>
                    <h5><?php echo $strings[$CONTACT_TEXT]; ?></h5>
                    <p style="font-size: 15px;"><?php echo $strings[$SEND_A_MESSAGE_CONTACT]; ?></p>
                </div>
                <div class="col-md-4">
                    <div class="wrapper-who">
                        <h6 class="text-uppercase"><?php echo $strings[$SEND_A_MESSAGE]; ?></h6>
                        <div class="line"></div>
                    </div>

                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Your name" style="background-color: rgba(3,205,116,0.15);color: #e0e0e0;border-radius: 25px;">
                    </div>

                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Your email" style="background-color: rgba(3,205,116,0.15);color: #e0e0e0;border-radius: 25px;">
                    </div>

                    <div class="input-group">
                        <textarea class="form-control" aria-label="With textarea" placeholder="Message" style="background-color: rgba(3,205,116,0.15); color: #e0e0e0;border-radius: 25px;"></textarea>
                    </div>

                    <a class="btn btn-lg btn-contact" href="#" style="margin-top: 20px"><?php echo $strings[$SEND_MESSAGE_BTN]; ?></a>

                </div>
            </div>

        </div>
        <!-- /.container -->
    </footer>
</main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.9/js/bootstrap-dialog.min.js"></script>


</body>
</html>