'use client'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useSearchParams, useRouter } from "next/navigation"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['TECHNICIAN','COMPANY','INSTRUCTOR']),
})

export default function RegisterPage(){
  const sp = useSearchParams()
  const router = useRouter()
  const { register, handleSubmit } = useForm({ defaultValues: { role: sp.get('mode')==='company' ? 'COMPANY' : 'TECHNICIAN' } as any })
  return (
    <div className="max-w-md mx-auto py-16">
      <h1 className="text-2xl font-bold mb-6">Criar conta</h1>
      <form className="card p-6 space-y-4" onSubmit={handleSubmit(async (data:any)=>{
        const res = await fetch('/api/register', { method:'POST', body: JSON.stringify(data) })
        if(res.ok) router.push('/login')
        else alert('Erro ao registrar')
      })}>
        <input className="input" placeholder="Nome completo" {...register('name',{required:true})} />
        <input className="input" placeholder="Email" {...register('email',{required:true})} />
        <input className="input" type="password" placeholder="Senha (mín. 6)" {...register('password',{required:true})} />
        <select className="input" {...register('role',{required:true})}>
          <option value="TECHNICIAN">Sou profissional de TI</option>
          <option value="COMPANY">Sou empresa</option>
          <option value="INSTRUCTOR">Sou instrutor</option>
        </select>
        <button className="btn-primary w-full" type="submit">Criar conta</button>
      </form>
    </div>
  )
}
