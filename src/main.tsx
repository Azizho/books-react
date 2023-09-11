import ReactDOM from 'react-dom/client'
import App from '@/App'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@/config/theme'
import '@/fontsource/Noto_Sans/index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
        <CssBaseline />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
)
