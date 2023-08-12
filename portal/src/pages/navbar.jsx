import React from 'react'
import './styles/navbar.css';

const navbar = () => {
    return (
        <div class="nav-container">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="ann">Announcements</a></li>
			<li><a href="events">Events</a></li>
			<li><a href="about">About Us</a></li>
			<li><a href="contact">Contact Us</a></li>
			<li><a href="login">Login</a></li>
		</ul>
	</div>
    )
}

export default navbar