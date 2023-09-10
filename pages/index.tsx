'use client'

import styles from './home.module.scss'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from 'next/link'

export default function Home() {
  return (
    <Box component={motion.div} animate={{rotate: [0, 360]}}>
      <Container maxWidth="lg">
        <Link href="/login"><Button sx={{mx: 1}} variant='contained'>Login</Button></Link>
        <Link href="/signup"><Button variant='contained'>Signup</Button></Link>
      </Container>
    </Box>
  )
}
