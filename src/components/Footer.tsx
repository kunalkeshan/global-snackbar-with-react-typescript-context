/**
 * Footer Component
 */

// Dependencies
import React from 'react';

const Footer = () => {
	return (
		<footer>
			<p>
				&copy; Copyright {new Date().getFullYear()} -{' '}
				<a href='https://kunalkeshan.dev' target={'_blank'}>
					Kunal Keshan
				</a>
			</p>
		</footer>
	);
};

export default Footer;
