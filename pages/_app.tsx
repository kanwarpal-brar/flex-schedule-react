import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ResponsiveAppBar from '@/components/responsive-top-menu/responsive-top-menu'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flex Schedule Home',
  description: 'Scheduling App for the Overwhelmed',
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1c1c1c'
    },
    secondary: {
      main: '#404040'
    },
    background: {
      default: '#2e2e2e'
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  console.log(Component.name)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box component='main' className={inter.className}>
          {Component.name != 'Home' ? <ResponsiveAppBar/> : undefined}
          <Box className={inter.className} sx={{ display: 'block', mx: 'auto', textAlign: 'center', my: 50 }}>
            <Component {...pageProps} />
          </Box>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}
