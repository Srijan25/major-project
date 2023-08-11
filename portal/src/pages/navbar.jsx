import React from 'react'
import './styles/navbar.css';

const navbar = () => {
    return (
        <div class="container">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="#">Attendance</a></li>
			<li><a href="#">Grade</a></li>
			<li><a href="#">Notes</a></li>
			<li><a href="events">Events</a></li>
			<li><a href="#">About Us</a></li>
			<li><a href="login">Login</a></li>
		</ul>
	</div>
    )
}

export default navbar