
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
<<<<<<< HEAD
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
}

#modal{
    display: none;
}
#content{
    text-align: left;   
}
=======
	.title-2 {
		color: rgba(255, 255, 0, 0.67);
	}
	.container {
		display: flex;
		height: 100vh;
		width: 100%;
		background-color: #3d226dd4;
	}
	.container p {
		box-sizing: border-box;
		font-size: 20px;
		color: rgba(255, 255, 0, 0.648);
		font-weight: bold;
		width: 81%;
		text-align: center;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
	.content-box {
		padding: 50px 150px 50px 150px;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: 120px;
		border-left: 3px dashed black;
	}
	.title {
		color: #fff;
		letter-spacing: 2px;
		font-size: 50px;
		text-transform: uppercase;
	}
	.links {
		padding: 10px;
		margin-top: 10px;
		margin-left: 10%;
	}
	.links .login {
		background: rgba(0, 0, 255, 0.532);
		letter-spacing: 2px;
		padding: 10px 40px;
		border-radius: 5px;
		color: #fff;
		text-decoration: none;
		margin-right: 30px;
		font-size: 20px;
		font-weight: bold;
		text-transform: uppercase;
	}
	.links .signup {
		background: rgba(255, 0, 0, 0.489);
		letter-spacing: 2px;
		padding: 10px 40px;
		border-radius: 5px;
		color: #fff;
		text-decoration: none;
		font-size: 20px;
		font-weight: bold;
		text-transform: uppercase;
	}
	.links .login:hover {
		background-color: blue;
	}
	.links .signup:hover {
		background-color: red;
	}
	.content {
		margin-top: 20px;
		text-align: center;
		color: #999;
	}
	img {
		display: flex;
	}
>>>>>>> 8d431ea8fbdc589d0b83b2385495ec0764e3633d
</style>
