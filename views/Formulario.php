<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title>Document</title>
  <link rel="stylesheet" href="../public/css/menus.css">
  <link rel="stylesheet"  href="../public/css/editor.css" type="text/css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">


    <!-- prueba -->
    <link rel="stylesheet" href="../public/css/editor.css?v=<?php echo(rand()); ?>" />
    <link rel="stylesheet" href="../public/css/note.css?v=<?php echo(rand()); ?>" />


    <!-- fin -->
</head>


<body>

<header>
        <div class="navbar">
            <div class="logo"><a href="#">Personal Blog</a></div>
            <ul class="links">
                <li><a href="../index.php">Home</a></li>
                <li><a href="#">Proyects</a></li>
                <li><a href="#">others</a></li>
                <li><a href="#">others</a></li>
            </ul>
            <a href="#" class="actionbtn">Contact</a>
            <div class="toggle"><i class="fa-solid fa-bars"></i></div>
        </div>

        <div class="dropdownmenu">
            <li><a href="../index.php">Home</a></li>
                <li><a href="#">Proyects</a></li>
                <li><a href="#">others</a></li>
                <li><a href="#">others</a></li>
                <li><a href="#" class="actionbtn">Contact</a></li>
        </div> 
    </header>





<!-- prueba -->


<div class="container">
        <div class="options">
            <!-- text format -->
            <button id="bold" class="option-button format">
                <i class="fa-solid fa-bold"></i>
            </button>
        
        <button id="italic" class="option-button format">
           <i class="fa-solid fa-italic"></i>
        </button>
        <button id="underline" class="option-button format">
            <i class="fa-solid fa-underline"></i>
        </button>
        <button id="strikethrough" class="option-button format">
            <i class="fa-solid fa-strikethrough"></i>
        </button>
        <button id="superscript" class="option-button script">
            <i class="fa-solid fa-superscript"></i>
        </button>
        <button id="subscript" class="option-button script">
            <i class="fa-solid fa-subscript"></i>
        </button>

        <!-- list  -->
        <button id="insertorderedlist" class="option-button">
           <div class="fa-solid fa-list-ol"></div>
        </button>

           <button id="inertunoderedlist" class="option-button">
            <i class="fa-solid fa-list"></i>
           </button>

           <!-- undo/redo -->
           <button id="uno" class="option-button">
            <i class="fa-solid fa-rotate-left"></i>
           </button>

           <button id="uno" class="option-button">
            <i class="fa-solid fa-rotate-right"></i>
           </button>

           <!-- link -->
           <button id="createlink" class="adv-option-button">
            <i class="fa fa-link"></i>
           </button>

           <button id="unlink" class="option-button">
            <i class="fa fa-unlink"></i>
           </button>

           <!-- aligment -->
           <button id="justifyleft" class="option-button align">
            <i class="fa-solid fa-align-left"></i>
           </button>

           <button id="justifycenter" class="option-button align">
            <i class="fa-solid fa-align-center"></i>
           </button>

           <button id="justifyright" class="option-button align">
            <i class="fa-solid fa-align-right"></i>
           </button>

           <button id="justifyfull" class="option-button align">
            <i class="fa-solid fa-align-justify"></i>
           </button>

           <button id="ident" class="option-button spacing">
            <i class="fa-solid fa-indent"></i>
           </button>

           <button id="outdent" class="option-button spacing">
            <i class="fa-solid fa-outdent"></i>
           </button>

           <!-- headings -->

           <select name="" class="adv-option-button" id="formatblock">
            <option value="H1">H1</option>
            <option value="H2">H2</option>
            <option value="H3">H3</option>
            <option value="H4">H4</option>
            <option value="H5">H5</option>
            <option value="H6">H6</option>
           </select>

           <select id="fontname" class="adv-option-button"></select>
           <select name="" id="fontsize" class="adv-option-button"></select>
           <!-- color -->
           <div class="input-wrapper">
            <input type="color" id="forecolor" class="adv-option-button"/>
            <label for="forecolor">Font Color</label>
            <input type="color" name="" id="backcolor" class="adv-option-button">
            <label for="backcolor">Highlight Color</label>
           </div>
    </div>
    <form action="../insertarcontenido.php" method="post" enctype="multipart/form-data" name="form1">


    <tr>
  <td>Título: 
    <label for="campo_titulo"></label></td>
  <td><input class ="inputs" type="text" name="campo_titulo" id="campo_titulo"></td>
  
  
  </tr>
     <textarea class="inputs" name="text-input" id="text-input" contenteditable="true"></textarea> 
 <!-- <td><div class="inputs" name="text-input" id="text-input" contenteditable="true"></div></td> -->
    

    <td colspan="2" align="center">Seleccione una imagen con tamaño inferior a 2 MB</td></tr>
  <tr>
  <input type="hidden" name="MAX_TAM" value="2097152">
    <td colspan="2" align="left"><input type="file" name="imagen" id="imagen"></td>
    </tr>

    <td colspan="2" align="center">  
    <input type="submit" class="btn" name="btn_enviar" id="btn_enviar" value="Enviar"></td></tr>
  <tr><td colspan="2" align="center"><a href="../index.php">Página de visualización del blog</a></td></tr>
  
    </div>

    

<!-- fin -->

<p>&nbsp;</p>

</form>

<script src="../public/js/menus.js"></script>
<script src="../public/js/note.js"></script>
</body>
</html>