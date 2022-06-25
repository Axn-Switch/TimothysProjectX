
<template>
       <div id="ap">
             <p>
        FunLympics 2023
    </p>
    <div id='content-box'>
        <div>
            <p>Watch the FunLympic Games Online</p>
            <div>
				<router-link to="/login" id="Login" class="button">Login</router-link>
				<router-link to="/signup" id="Signup" class="button">Signup</router-link>
             
            </div>
            <div id="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur tellus 
                at velit volutpat, sollicitudin semper tortor finibus. Pellentesque vitae ni</div>
        </div>
    </div>
    <img src="../assets/Untitled.png">

    <div id="modal">
        <form id="loginform" class="formgroup" runat="server">
            <div class="exit" onclick="closeModal()">X</div>
            <input type="text" placeholder="username" id="usernolog">
            <input type="password" placeholder="password" id="userpasslog">
            <button ID="loginsubmit" Class="button"  Text="login" OnClick="loginsubmit_Click"></button>
        <a href="">forgotten password?</a>
        </form>
    </div>
       </div>
</template>

<style scoped>
	html, body {
    margin: 0;
    font-family: Roboto;
}

#ap {
    display: flex;
    height: 100vh;
    width: 100%;
}
#loginform{
    text-align: center;
    padding-bottom: 70px;
    width: 25%;
    margin: auto;
   
}
input {
    margin: auto;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 200px;
    padding: 5px 10px 5px 10px;
}
a{
   list-style-type: none;
   text-decoration: none;
}
    #ap > p {
        position: absolute;
        left: 120px;
    }


#notification {
    position: fixed;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #182836;
    padding: 15px 25px 15px 25px;
    color: white;
}
#adlogin {
    background-color: white;
    border-radius: 7px;
    width: 20px;
    height: 20px;
    padding: 10px;
    position: absolute;
    top: 16px;
    right: 2%;
    text-align: center;
    display: flex;
}

#ap > div > div > p {
    font-size: 60px;
    font-weight: 400;
    width: 90%;
    margin-top: 10px;
    margin-bottom: 30px;
	text-align: left;
	line-height: 1.1;
}

#content-box {
    padding: 50px 150px 50px 150px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 120px;
    border-left: 2px solid black;
    justify-content: center;
}

    #content-box > div > div:first-of-type {
        display: flex;
        width: 70%;
        margin-left: 2px;
        font-size: 1.4rem;
        margin-bottom: 27px;
    }

.button {
    border: none;
    padding: 15px 35px 15px 35px;
    background-color: blue;
    border-radius: 7px;
    color: white
}

#Signup {
    background-color: #4B88A2;
}

#Login {
    background-color: #BB0A21;
    margin-right: 10%;
}

img {
    display: flex;
    margin-left: auto;
}

.button:hover {
    cursor: pointer;
}


#modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100VH;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    display: none;
}

.formgroup {
    background-color: white;
    width: 40%;
    margin: auto;
    height: 150px;
    padding: 50px 25px 50px 25px;
}

.exit {
    padding: 5px 8px;
    background-color: red;
    color: white;
    position: relative;
    top: -30px;
    left: 97%;
    display: flex;
    width: fit-content;
    font-size: 0.8em;
}

    .exit:hover {
        cursor: pointer;
    }

#content{
	text-align: left;
}
</style>