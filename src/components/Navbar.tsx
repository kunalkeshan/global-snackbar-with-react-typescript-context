/**
 * Navbar Component
 */

// Dependencies
import React from 'react';

const Navbar = () => {
	return (
		<nav>
			<a className='nav__logo' href='/'>
				<p>&lt;App.tsx /&gt;</p>
			</a>
			<ul className='nav__list'>
				<li>
					<a
						href='https://blog.kunalkeshan.dev/learn-how-to-use-context-and-reducer-hooks-in-reactjs-by-creating-a-global-snackbar'
						target={'_blank'}
					>
						Instructions
					</a>
				</li>
				<li>
					<a
						href='https://github.com/kunalkeshan/global-snackbar-with-react-typescript-context'
						target={'_blank'}
					>
						GitHub
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
