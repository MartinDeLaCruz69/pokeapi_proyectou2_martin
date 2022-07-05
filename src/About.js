import React from "react";
import "./App.css"

const Begin = () => {

    return (
        <div class="center">
            <div>
                <img className="images" src="./img/Me.jpg" alt="perfil"></img>
            </div>
            <div>
            <h1>Juan Martin Esparza de la Cruz</h1><br></br>
            <h5>Universidad Tecnológica de Aguascalientes</h5><br></br>

            <h1>THIS ARE MY HOBBIES</h1>

            <div >
        <table>
            <tr>
                <td>1.- I like to practice boxing.</td><br></br>
                <div>
                <img className="img" src="./img/boxeo.jpg" alt="box"></img>
                </div>
            </tr>
            <tr>
                <td>2.- I enjoy eating discada.</td><br></br>
                <div>
                <img className="img" src="./img/discada.jpg "alt=""></img>
                </div>
            </tr>
            <tr>
                <td>3.- I like to play video games.</td><br></br>
                <div>
                <img className="img" src="./img/games.jpg "alt=""></img>
                </div>
            </tr>
            <tr>
                <td>4.- I like to listen to all kinds of music.</td><br></br>
                <div>
                <img className="img" src="./img/Music.png "alt=""></img>
                </div>
            </tr>
            <tr>
                <td>5.- I like to travel.</td><br></br>
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