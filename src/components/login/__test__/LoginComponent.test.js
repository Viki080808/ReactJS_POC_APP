import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useNavigate } from "react-router-dom"
import LoginComponent from '../LoginComponent';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));

afterEach(cleanup)

describe("Login Component Unit Test", () => {
    it('Login Page Loaded', () => {
        const {getByTestId} = render(<LoginComponent/>)
        const dashboard = getByTestId('LoginComponent')
        expect(dashboard).toBeTruthy()
    })
    
    it('Email Input Loaded',()=>{
        const {getByTestId} = render(<LoginComponent/>)
        const EmailInput = getByTestId('EmailInput')
        expect(EmailInput).toBeTruthy()
    })
    
    it('Password Input Loaded',()=>{
        const {getByTestId} = render(<LoginComponent/>)
        const PasswordInput = getByTestId('PasswordInput')
        expect(PasswordInput).toBeTruthy()
    })
    
    it('Show Password Switch Loaded',()=>{
        const {getByTestId} = render(<LoginComponent/>)
        const ShowPwdSwitch = getByTestId('ShowPasswordToggle')
        expect(ShowPwdSwitch).toBeTruthy()
    })
    
    it('Login Button Loaded',()=>{
        const {getByTestId} = render(<LoginComponent/>)
        const LoginButton = getByTestId('LoginButton')
        expect(LoginButton).toBeTruthy()
    })
    
    it('Info Header Loaded',()=>{
        const {getByTestId} = render(<LoginComponent/>)
        const InfoHeader = getByTestId('InfoHeader')
        expect(InfoHeader).toBeTruthy()
    })
    
    it('Info SubHeader Loaded',()=>{
        const {getByTestId} = render(<LoginComponent/>)
        const InfoSubHeader = getByTestId('InfoSubHeader')
        expect(InfoSubHeader).toBeTruthy()
    })
    
    it('Info Description Loaded',()=>{
        const {getByTestId} = render(<LoginComponent/>)
        const InfoDescription = getByTestId('InfoDescription')
        expect(InfoDescription).toBeTruthy()
    })
    
    it('Info Image Loaded',()=>{
        const {getByTestId} = render(<LoginComponent/>)
        const InfoImage = getByTestId('InfoImage')
        expect(InfoImage).toBeTruthy()
    })

    it('Email On Change', async()=> {
        await act(async()=>{
            const {getByTestId} = render(<LoginComponent/>)
            const EmailId = getByTestId('EmailInput').querySelector('input')
            await fireEvent.change(EmailId,{target:{value:'vignesh.r@softcrylic.co.in'}})
            expect(EmailId.value).toBe('vignesh.r@softcrylic.co.in')
        })
    })

    it('Password On Change',async()=>{
        await act(async()=>{
            const {getByTestId} = render(<LoginComponent/>)
            const Password = getByTestId('PasswordInput').querySelector('input')
            await fireEvent.change(Password,{target:{value:'Pass123'}})
            expect(Password.value).toBe('Pass123')
        })
    })

    it('Show Password',async()=>{
        await act(async()=>{
            const {getByTestId} = render(<LoginComponent/>)
            const Password = getByTestId('PasswordInput').querySelector('input')
            await fireEvent.change(Password,{target:{value:'Pass123'}})
            const ShowPassword = getByTestId('ShowPasswordToggle')
            await fireEvent.click(ShowPassword)
            expect(Password).toHaveAttribute('type','text')
        })
    })

    it('Login Click',async()=> {
        await act(async()=>{
            const {getByTestId} = render(<LoginComponent/>)
            const EmailId = getByTestId('EmailInput').querySelector('input')
            await fireEvent.change(EmailId,{target:{value:'vignesh.r@softcrylic.co.in'}})
            const Password = getByTestId('PasswordInput').querySelector('input')
            await fireEvent.change(Password,{target:{value:'Pass123'}})
            const LoginButton = getByTestId('LoginButton')
            await fireEvent.click(LoginButton)
            expect(EmailId.value).toBe('vignesh.r@softcrylic.co.in')
            expect(Password.value).toBe('Pass123')
        })
    })

    it('Login Click error',async()=> {
        await act(async()=>{
            const {getByTestId} = render(<LoginComponent/>)
            const LoginButton = getByTestId('LoginButton')
            await fireEvent.click(LoginButton)
            expect(LoginButton).toBeTruthy()
        })
    })

    it('Softcrylic Link Click',async()=>{
        await act(async()=>{
            const {getByTestId} = render(<LoginComponent/>)
            const SoftcylicLink = getByTestId('SoftcryilLink')
            await fireEvent.click(SoftcylicLink)
            expect(SoftcylicLink).toBeTruthy()
        })
    })
})