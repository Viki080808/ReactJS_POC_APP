import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginComponent from './components/login/LoginComponent'
import HomeComponent from './components/home/HomeComponent'
import DataImportComponent from './components/dataimport/DataImportComponent'
import HeaderComponent from './components/shared/HeaderComponent'

const RouteConfig = (props) => {
    //console.log(props)
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LoginComponent/>}></Route>
            <Route path="/login" element={<LoginComponent/>}></Route>
            <Route path="*" element={<CustomComponent/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

const CustomComponent = () => {
  return (<>
    <div style={{background:'#f1f2f3', paddingLeft:'2.5%', paddingRight:'2.5%',minHeight:'100vh'}}>
      <HeaderComponent></HeaderComponent>
      <div>
      <Routes>
        <Route path='/home' element={<HomeComponent/>}></Route>
        <Route path='/dataimport' element={<DataImportComponent/>}></Route>
      </Routes>
      </div>
    </div>
  </>)
}

export default RouteConfig
