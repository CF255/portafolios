<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php 
    
    $miconexion =mysqli_connect("localhost", "root", "", "bbddblog");

    /* comprobar conexion */
    if(!$miconexion){
       /*  echo "la conexion ha fallado: " . mysqli_error(); */

        exit();
    }

    if($_FILES["imagen"]["error"]){
        
        switch($_FILES["imagen"]["error"]){
            
            case 1: // error exceso de tamaño de archivo
                echo "El tamaño del archivo es muy grande";
                break;
            
            case 2: // error tamaño archivo marcado desde formulario
                    echo "El tamaño del archivo excede los 2 MB";
                    break;
                
            case 3: //error cprrupcion de archivo
                    echo "El envio del archivo se interrumpio";
                    break;
                
            case 4: // error no se subio ningun archivo
                    echo "No se ha eniado ningun archivo";
                    break;
        }

    }else{

        echo "Entrada subida correctamente<br/>";

        if((isset($_FILES["imagen"]["name"]) && ($_FILES["imagen"]["error"] ==UPLOAD_ERR_OK))){

            $destino_de_ruta = "imagenes/";

            move_uploaded_file($_FILES["imagen"]["tmp_name"], $destino_de_ruta . $_FILES["imagen"]["name"]);

            echo "El archivo" . $_FILES["imagen"]["name"] . "se ha copiado en el directorio de imagenes";
        }else{
            echo "El archivo no se ha podido cargar";
        }
    }

    $eltitulo = $_POST["campo_titulo"];
    $lafecha = date("Y-m-d H:i:s");
    $elcomentario =$_POST["text-input"];
    $laimagen = $_FILES["imagen"]["name"];

    $miconsulta = "INSERT INTO contenido ( titulo, fecha, comentario, imagen) VALUES ('". $eltitulo ."', '" . $lafecha . "', '" . $elcomentario . "', '" . $laimagen . "')";

    $resultado = mysqli_query($miconexion, $miconsulta);

    /* cerrar conexion */

    mysqli_close($miconexion);

    echo "<br/> se ha agregado con exito. <br/><br/>";

    ?>

    <a href="views/Formulario.php"> Añadir nueva entrada </a>


    <a href ="index.php"> Ver Blog </a>

</body>
</html>