import './styles/global.css';
import { Heading } from './components/Heading';
import Logo from './Logo';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text size='sm' className='text-gray-400'>
          Faça login e comece a usar!
        </Text>
      </header>
      <form action="" className='flex flex-col items-stretch w-screen max-w-sm mt-10'>
        <label htmlFor="email" className='flex flex-col gap-3 mt-4'>
            <Text className='font-semibold pl-4'>Endereço de email</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope/>
              </TextInput.Icon>
              <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail'/>
            </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3 mt-4'>
            <Text className='font-semibold pl-4'>Sua Senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock/>
              </TextInput.Icon>
              <TextInput.Input type='password' id='password' placeholder='*********'/>
            </TextInput.Root>
        </label>
        <label htmlFor="remember" className='flex items-center gap-2 mt-4'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>Lembrar de mim!</Text>
        </label>
        <Button type='submit' className='mt-4'>Entrar na Plataforma</Button>
      </form>
      <footer className='flex flex-col items-center gap-3 mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Crie uma conta!</a>
        </Text>
      </footer>
    </div>
  )
}
