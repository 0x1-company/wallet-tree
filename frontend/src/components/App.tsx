import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WalletProvider } from '../context/WalletContext'
import FormEditPage from '../pages/FormEditPage'
import ProfilePage from '../pages/Profile'
import TopPage from '../pages/TopPage'

const App = () => {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<TopPage />} />
          <Route path='/form/edit' element={<FormEditPage />} />
          <Route path='/:id' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  )
}

export default App
