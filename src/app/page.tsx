"use client"
import Image from 'next/image'
import HeaderPage from './components/partials/Header'
import HomePage from './(routes)/home/page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Home = () => <HomePage />




export default Home;