import { LogOut } from 'react-feather';
import { Link, router } from '@inertiajs/react'

export default function SecretariaPage({ user }) {


    return (
        <div className="w-full flex justify-center ">
            <div className="w-full h-full bg-background shadow-xl max-w-[1080px] flex flex-col gap-10 justify-start items-start p-20">
                <h1 className="font-poppins text-bodyText font-bold ">Olá, {user.name}</h1>
                <Link method="post" href={route('logout')}><LogOut className="text-[#355245] mr-4" /></Link>
                <div className="justify-center bg-white min-h-[400px] flex gap-10 w-full min-w-[400px] p-10 flex-wrap overflow-auto">
                    <button className="h-full w-[300px] bg-background shadow-xl flex justify-center items-center uppercase font-bold font-roboto text-bodyText text-[18px]">
                        <Link href={route('secretary.createClient', user.id)}>Cadastrar Cliente</Link>
                    </button>
                    <button className="h-full w-[300px] bg-background shadow-xl flex justify-center items-center uppercase font-bold font-roboto text-bodyText text-[18px]">
                        <Link href={route('secretary.anunciarChegada', user.id)}>Anunciar Chegada</Link>
                    </button>
                    <button className="h-full w-[300px] bg-background shadow-xl flex justify-center items-center uppercase font-bold font-roboto text-bodyText text-[18px]">
                        <Link href={route('secretary.criarAgendamento', user.id)}>Criar Agendamento</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
