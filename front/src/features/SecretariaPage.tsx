
export default function SecretariaPage () {


    return (
        <div className="w-full flex justify-center ">
            <div className="w-full h-full bg-background shadow-xl max-w-[1080px] flex flex-col gap-10 justify-start items-start p-20">
                <h1 className="font-poppins text-bodyText font-bold ">Olá Gustavo Cacau</h1>
                <div className="justify-center bg-white min-h-[400px] flex gap-10 w-full min-w-[400px] p-10 flex-wrap overflow-auto">
                    <button className="h-full w-[300px] bg-background shadow-xl flex justify-center items-center uppercase font-bold font-roboto text-bodyText text-[18px]">
                        {/* Navegar para cadastrar clientes */}
                        Cadastrar Cliente
                    </button>
                    <button className="h-full w-[300px] bg-background shadow-xl flex justify-center items-center uppercase font-bold font-roboto text-bodyText text-[18px]">
                        {/* Navegar para anunciar chegada */}
                        Anunciar Chegada
                    </button>
                </div>
            </div>
        </div>
    )
}
