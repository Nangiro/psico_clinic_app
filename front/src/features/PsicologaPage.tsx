
export default function PsicologaPage () {


    return (
        <div className="w-full h-full bg-[#BEE1E3] flex flex-col gap-10 justify-start items-start p-20">
            <h1 className="text-[#355245] ">Olá NAME</h1>
            <div className="bg-white min-h-[400px] flex gap-10 w-full min-w-[400px] p-10 flex-wrap overflow-auto">
                <button className="h-full w-[300px] bg-black/10 flex justify-center items-center uppercase font-bold">
                    {/* Navegar para cadastrar clientes */}
                    Ver Consultas
                </button>
            </div>
        </div>
    )
}