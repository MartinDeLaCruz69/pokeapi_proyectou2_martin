import React from "react";
import "./App.css"

const Begin = () => {

    return (
        <div>
            <div>
                <img className="Images" src="./img/Me.jpg" alt="perfil"></img>
            </div>
            <div>
            <h1>Juan Martin Esparza de la Cruz</h1><br></br>
            <h5>Universidad Tecnológica de Aguascalientes</h5><br></br>

            <div class="hobbies">
        <table>
            <tr>
                <td>1.- Me gusta practicar boxeo.</td><br></br>
                <div>
                <img className="img" src="./img/boxeo.jpg" alt="box"></img>
                </div>
            </tr>
            <tr>
                <td>2.- Disfruto comer discada.</td><br></br>
                <div>
                <img className="img" src="./img/discada.jpg "alt=""></img>
                </div>
            </tr>
            <tr>
                <td>3.- Jugar videojuegos.</td><br></br>
                <div>
                <img className="img" src="./img/games.jpg "alt=""></img>
                </div>
            </tr>
            <tr>
                <td>4.- Me gusta escuchar todo tipo de música.</td><br></br>
                <div>
                <img className="img" src="./img/Music.png "alt=""></img>
                </div>
            </tr>
            <tr>
                <td>5.- Me gusta viajar.</td><br></br>
                <div>
                <img className="img" src="./img/viajar.jpeg "alt=""></img>
                </div>
            </tr>
        </table>
    </div>
            </div>
        </div>
     );

};
export default Begin;