'use client'
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"

export default function LoginPage(){
  const { register, handleSubmit } = useForm<{email:string; password:string}>()
  return (
    <div className="max-w-md mx-auto py-16">
      <h1 className="text-2xl font-bold mb-6">Entrar</h1>
      <form onSubmit={handleSubmit(async (data)=>{
        await signIn('credentials', { email: data.email, password: data.password, callbackUrl: '/dashboard' })
      })} className="card p-6 space-y-4">
        <input className="input" placeholder="Email" {...register('email', {required:true})} />
        <input className="input" type="password" placeholder="Senha" {...register('password', {required:true})} />
        <button className="btn-primary w-full" type="submit">Entrar</button>
      </form>
    </div>
  )
}
