/*
 * Copyright (c) 2023 [Muhammad Fiaz](https://github.com/muhammad-fiaz/)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS.md OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {useEffect, useState} from 'react'

const Icon = dynamic(() => import('../../src/components/utils/icon.tsx'));

import Section from '../../src/components/structure/section';
import Container from '../../src/components/structure/container';

const css  = dynamic(import('../../assets/styles/scss/sections/icons/iconForm.module.scss'));
import dynamic from "next/dynamic";

export default function PageWithJSbasedForm() {
	// Handles the submit event on form submit.
	const handleSubmit = async (event) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault()
		
		// Get data from the form.
		const data = {
			prefix: event.target.prefix.value,
			icon: event.target.icon.value,
		}

		// Send the data to the server in JSON format.
		const JSONdata = JSON.stringify(data)
		
		// API endpoint where we send form data.
		const endpoint = '/api/icon-form'
		
		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: 'POST',
			// Tell the server we're sending JSON.
			headers: {
				'Content-Type': 'application/json',
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		}
		
		// Send the form data to our forms API on Vercel and get a response.
		const response = await fetch(endpoint, options)
		
		// Get the response data from server as JSON.
		// If server returns the name submitted, that means the form works.
		const result = await response.json()

		console.log(result)

		setIcon(result)
	}

	const [theIcon, setIcon] = useState({
		prefix: "fad",
		icon: "star",
	});

	useEffect( () => {
		
	}, []);

	const displayIcon = ({ prefix, icon }) => {
		return ( <Icon icon={[ prefix, icon ]} /> )
	}

	return (
		<Section classProp={`${css.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<form onSubmit={handleSubmit} className={css.form}>
					<ul>
						<li>
							<label htmlFor="prefix">Library</label>
							<input type="text" id="prefix" name="prefix" required />
						</li>
						<li>
							<label htmlFor="icon">Icon Name</label>
							<input type="text" id="icon" name="icon" required />
						</li>
					</ul>
					<button className={`${css.button} button`} type="submit">Submit</button>
				</form>
				<div className={css.results}>
					{ displayIcon(theIcon) }
				</div>
			</Container>
		</Section>
	)
}