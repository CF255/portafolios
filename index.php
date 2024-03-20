<!DOCTYPE html>
<html lang="en">
<head>
  
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content=" initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="public/css/paginas.css">

<link rel="stylesheet" href="public/css/index.css?v=<?php echo(rand()); ?>" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="
https://cdn.jsdelivr.net/npm/swiper@9.4.1/modules/scrollbar/scrollbar.min.css
" rel="stylesheet">
</head>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, numquam architecto. Laudantium blanditiis culpa corporis quod dolorum harum. Repellat at quidem, error et velit magni illo repudiandae assumenda corrupti itaque?</p>
<body>
    <header>
        <div class="navbar">
            <div class="logo"><a href="#">Personal Blog</a></div>
            <ul class="links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Proyects</a></li>
                <li><a href="views/Formulario.php">blog</a></li>
                <li><a href="#">others</a></li>
            </ul>
            <a href="#" class="actionbtn">Contact</a>
            <div class="toggle"><i class="fa-solid fa-bars"></i></div>
        </div>

        <div class="dropdownmenu">
            <li><a href="#">Home</a></li>
                <li><a href="#">Proyects</a></li>
                <li><a href="views/Formulario.php">blog</a></li>
                <li><a href="#">others</a></li>
                <li><a href="#" class="actionbtn">Contact</a></li>
        </div>


        <div class="header-container container">
            <div class="header-text">
                <h1>Blog</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro corrupti voluptates provident recusandae a ea minus repellendus vero sapiente alias minima inventore quam nemo officiis, distinctio illo similique adipisci dolorem?
                </p>

                <a href="#" class="btn-1">Info.</a>
            </div>
            <div class="header-img">
                <img src="public/src/prueba.PNG" alt="">
            </div>
        </div>
    </header>


 
    <!-- carrousel proyects -->
        <div class="wrapper">
            <h1 class="titulo">Proyectos</h1>

            <ul class="carousel">
                <i id="left" class="fa-solid fa-angle-left"></i>
                <li class="card">
                    <div class="img"><img src="public/src/paint.png" alt="img" draggable="false"></div>
                    <h2>Paint</h2>
                    <a href="views/paint.html" class="btnenter">ENTER</a>
                </li>
                <li class="card">
                    <div class="img"><img src="public/src/note.png" alt="img" draggable="false" ></div>
                    <h2>Note</h2>
                    <a href="views/note.html" class="btnenter">ENTER</a>
                </li>
                <li class="card">
                    <div class="img"><img src="public/src/calc.png" alt="img" draggable="false"></div>
                    <h2>Calculadora</h2>
                    <a href="views/calc.html" class="btnenter">ENTER</a>
                </li>
                <li class="card">
                    <div class="img"><img src="public/src/mapa.png" alt="img" draggable="false"></div>
                    <h2>Map</h2>
                    <a href="views/map.html" class="btnenter">ENTER</a>
                </li>
                <li class="card">
                    <div class="img"><img src="public/src/clima.png" alt="img" draggable="false"></div>
                    <h2>Clima</h2>
                    <a href="views/clima.html" class="btnenter">ENTER</a>
                </li>
                <li class="card">
                    <div class="img"><img src="public/src/snake.png" alt="img" draggable="false"></div>
                    <h2>Snake</h2>
                    <a href="views/snake.html" class="btnenter">ENTER</a>
                </li>
                <li class="card">
                    <div class="img"><img src="public/src/crono.png" alt="img" draggable="false"></div>
                    <h2>Cronometro</h2>
                    <a href="views/crono.html" class="btnenter">ENTER</a>
                </li>
                <li class="card">
                    <div class="img"><img src="public/src/cifrado.png" alt="img" draggable="false"></div>
                    <h2>Cifrado Cesar</h2>
                    <a href="views/cifrado.html" class="btnenter">ENTER</a>
                </li>
                <li class="card">
                    <div class="img"><img src="public/src/listatarea.png" alt="img" draggable="false"></div>
                    <h2>Lista de tareas</h2>
                    <a href="views/listatarea.html" class="btnenter">ENTER</a>
                </li>
            </ul>
            <a href="views/vermasapp.html" class="vertodo">ver mas...</a>
            <i id="rigth" class="fa-solid fa-angle-right"></i>

            
        </div>

    <!-- fin carrousel proyects -->

    <!-- carrousel paginas -->

        
    <div class="wrapperweb">

    <h1 >Plantillas Web</h1>

    <i id="leftweb" class="fa-solid fa-angle-left"></i>
        <div class="carouselweb">
          <a href="#"><img src="public/src/tienda.png" alt="img"></a>
          <a href="#"><img src="public/src/plantilla3.jpeg" alt="img"></a>
            <a href="#"><img src="public/src/plantilla2.png" alt="img"></a>
            <img src="public/src/calc.png" alt="img">
            <img src="public/src/web.png" alt="img">
            <img src="public/src/web.png" alt="img">
        </div>
        <i id="rightweb" class="fa-solid fa-angle-right"></i>
    </div>


    <!-- fin carrousel pagina -->

<!-- BLOG -->

<section id="blog">

<div class="blog-heading">
                <span>Post</span>
                <h3>My blog</h3>
            </div>

<div class='blog-container'>

<?php
 
 $miconexion =mysqli_connect("localhost", "root", "", "bbddblog");

 /* comprobar conexion */
 if(!$miconexion){
   /*   echo "la conexion ha fallado: " . mysqli_error(); */

     exit();
 }

 $miconsulta = "SELECT * FROM CONTENIDO ORDER BY FECHA DESC";

 

 if($resultado = mysqli_query($miconexion, $miconsulta)){

    while($registro =mysqli_fetch_assoc($resultado)){

        

       echo "<div class='blog-box'>";

        echo "<div class='blog-img'>";

        if($registro["imagen"]!=""){
            echo "<img src='imagenes/" . $registro['imagen'] . "' width='100px' />";
        }
        echo "</div>";

        echo "<div class='blog-text'>";

        echo "<a class='blog-tittle'>" . $registro['titulo'] . "</a>";

        echo "<span>" . $registro['fecha'] . "</span>";
        
        echo "<p>" . $registro["comentario"] . "</p>";

        echo " <a href= '# '> Read more...</a>";
    
        echo "</div>";


        echo "</div>";

      
    }
 }


?>

</div'>
</section>


    <!--   <section id="blog">

            <div class="blog-heading">
                <span>Post</span>
                <h3>My blog</h3>
            </div>

            <div class="blog-container">

                <div class="blog-box">
                    <div class="blog-img">
                        <img src="public/src/section1.png" alt="">
                    </div>

                    <div class="blog-text">
                        <span>19 june 2023 / Web Desing</span>
                        <a href="#" class="blog-tittle">Anime Blog</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia at, sunt aperiam aliquid doloremque distinctio veniam illo similique nisi blanditiis est recusandae et quo vitae, suscipit placeat voluptates vero!</p>
                    
                        <a href="#">Read more...</a>
                    </div>
                </div>

                <div class="blog-box">
                    <div class="blog-img">
                        <img src="public/src/section2.jpg" alt="">
                    </div>

                    <div class="blog-text">
                        <span>19 june 2023 / Web Desing</span>
                        <a href="#" class="blog-tittle">VideoGames Blog</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia at, sunt aperiam aliquid doloremque distinctio veniam illo similique nisi blanditiis est recusandae et quo vitae, suscipit placeat voluptates vero!</p>
                    
                        <a href="#">Read more...</a>
                    </div>
                </div>

                <div class="blog-box">
                    <div class="blog-img">
                        <img src="public/src/section3.jpg" alt="">
                    </div>

                    <div class="blog-text">
                        <span>19 june 2023 / Web Desing</span>
                        <a href="#" class="blog-tittle">Figure Blog</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia at, sunt aperiam aliquid doloremque distinctio veniam illo similique nisi blanditiis est recusandae et quo vitae, suscipit placeat voluptates vero!</p>
                    
                        <a href="#">Read more...</a>
                    </div>
                </div>

                <div class="blog-box">
                    <div class="blog-img">
                        <img src="public/src/section4.jpg" alt="">
                    </div>

                    <div class="blog-text">
                        <span>19 june 2023 / Web Desing</span>
                        <a href="#" class="blog-tittle">Console Blog</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia at, sunt aperiam aliquid doloremque distinctio veniam illo similique nisi blanditiis est recusandae et quo vitae, suscipit placeat voluptates vero!</p>
                    
                        <a href="#">Read more...</a>
                    </div>
                </div>

            </div>
        </section>

  
   -->
    <script src="public/js/index.js"></script>

</body>
</html>