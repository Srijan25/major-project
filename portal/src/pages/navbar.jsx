import React from 'react'
import './styles/navbar.css';

const navbar = () => {

	const logout = () => {
		window.localStorage.clear();
	}


	let menu = null;
	let name = window.localStorage.getItem('name');
	if(window.localStorage.getItem('token')){
		menu = (
			<>
			<li><a href="/profile">{name}</a></li>
			<li><a href="/" onClick={logout}>Logout</a></li>
			</>
		)
	}
	else{
		menu = (
			<>
			<li><a href="/login">Login</a></li>

			</>
		)
	}



    return (
        <div class="nav-container">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="ann">Announcements</a></li>
			<li><a href="events">Events</a></li>
			<li><a href="about">About Us</a></li>
			<li><a href="contact">Contact Us</a></li>
			{menu}
		</ul>
	</div>
    )
}

export default navbar