import {render, screen} from '@testing-library/react'
import Hero from '../../../src/components/sections/index/hero'
import '@testing-library/jest-dom'

describe('Hero section parts', () => {

	it('renders main heading', () => {
		render(<Hero />)
		
		const heading = screen.getByRole('heading', {
			name: /Muhammad Fiaz\./i,
		})
		
		expect(heading).toBeInTheDocument()
	})

	it('renders sub heading', () => {
		render(<Hero />)
		
		const heading = screen.getByRole('heading', {
			name: /Passionate Full Stack Developer\./i,
		})
		
		expect(heading).toBeInTheDocument()
	})

})