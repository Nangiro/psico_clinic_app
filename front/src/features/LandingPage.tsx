import { useForm } from "react-hook-form";
import Carousel from "../components/Carousel"

export default function LandingPage() {
    const cards = [
        {
            title: 'Melhor clinica da cidade',
            description: 'Mussum Ipsum, cacilds vidis litro abertis.  Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Bota 1 metro de cachacis aí pra viagem! Detraxit consequat et quo num tendi nada. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
            name: 'Fernando Kira'
        },
        {
            title: 'Experiencia única',
            description: 'Mussum Ipsum, cacilds vidis litro abertis.  Paisis, filhis, espiritis santis. Casamentiss faiz malandris se pirulitá. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
            name: 'Daniel Abade'
        },
        {
            title: 'Aceita varios planos de saúde',
            description: 'Mussum Ipsum, cacilds vidis litro abertis.  Manduma pindureta quium dia nois paga. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Cevadis im ampola pa arma uma pindureta.',
            name: 'Gustavo Cacau'
        },
        {
            title: 'Flexíveis',
            description: 'Mussum Ipsum, cacilds vidis litro abertis.  Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Cevadis im ampola pa arma uma pindureta. Atirei o pau no gatis, per gatis num morreus. Mé faiz elementum girarzis, nisi eros vermeio.',
            name: 'Gustavo Dias'
        },
        {
            title: 'Praticidade no agendamento',
            description: 'Mussum Ipsum, cacilds vidis litro abertis.  Delegadis gente finis, bibendum egestas augue arcu ut est. Quem num gosta di mé, boa gentis num é. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada.',
            name: 'Lucas Miguel'
        },
    ];

    const { register, handleSubmit, formState: { isValid } } = useForm({
        defaultValues: {
            nome: '',
            email: '',
            desc: ''
        }
    });

    const onSubmit =( data: any )=> {
        console.log(data)
    };

    return (
        <div className="w-full bg-[#E3E5D8] h-full overflow-auto">
            <div className="flex justify-center border-b-[#355245] border-b-[1px] h-12">
                <div className="flex w-full max-w-[1366px] items-center justify-between px-8 h-full">
                    <p>Home</p>
                    <p>Nossos serviços</p>
                    <p>Quem somoso</p>
                    <p>Depoimentos</p>
                    <p>Formulario de contato</p>
                    <p>Informações de contato</p>
                    <p>Entrar</p>
                </div> 
            </div>
            <div className="flex justify-center">
                <img className="w-full max-w-[1366px]" src="https://cdn.pixabay.com/photo/2019/05/27/07/26/mental-health-4232031_1280.jpg" />
            </div>
            <div className="flex justify-center mt-4 px-4">
                <div className="max-w-[1366px] w-full">
                    <h1 className="text-[#355245] ">Nossos serviços</h1>
                    <p>Mussum Ipsum, cacilds vidis litro abertis.  Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Interagi no mé, cursus quis, vehicula ac nisi. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Leite de capivaris, leite de mula manquis sem cabeça.</p>
                    <h2 className="text-[#355245] text-[32px] mt-4">Terapia Individual</h2>
                    <p>
                        Mussum Ipsum, cacilds vidis litro abertis.  Quem num gosta di mim que vai caçá sua turmis! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Quem manda na minha terra sou euzis!
                    </p>
                    <h2 className="text-[#355245] text-[32px] mt-4">Terapia de casal</h2>
                    <p>
                        Mussum Ipsum, cacilds vidis litro abertis.  Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Manduma pindureta quium dia nois paga. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Interagi no mé, cursus quis, vehicula ac nisi.
                    </p>
                    <h2 className="text-[#355245] text-[32px] mt-4">Terapia para Desenvolvedores</h2>
                    <p>
                        Mussum Ipsum, cacilds vidis litro abertis.  Cevadis im ampola pa arma uma pindureta. Viva Forevis aptent taciti sociosqu ad litora torquent. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Detraxit consequat et quo num tendi nada.
                        Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mé faiz elementum girarzis, nisi eros vermeio. Quem num gosta di mim que vai caçá sua turmis!
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-4 px-4">
                <div className="max-w-[1366px] w-full">
                    <h1 className="text-[#355245] ">Quem somos</h1>
                    <p>Mussum Ipsum, cacilds vidis litro abertis.  Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosta di mim que vai caçá sua turmis! Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                    <p>Diuretics paradis num copo é motivis de denguis. Leite de capivaris, leite de mula manquis sem cabeça. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Mé faiz elementum girarzis, nisi eros vermeio.</p>
                </div>
            </div>
            <div className="flex justify-center mt-4 px-4">
                <div className="max-w-[1366px] w-full">
                    <h1 className="text-[#355245]" >Depoimentos de Pacientes</h1>
                    <div className="px-12">
                        <Carousel cards={cards} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-12 px-4">
                <div className="max-w-[1366px] w-full">
                    <h1 className="text-[#355245]" >Formulario de contato</h1>
                    <div className="p-12 flex justify-center items-center rounded-lg">
                        <form className="text-black" onSubmit={handleSubmit(onSubmit)} id="contato">
                            <div className={`w-full flex flex-col text-white gap-1 items-start `}>
                                <span className="text-black">Nome</span>
                                <input 
                                    className="rounded-lg border-2 border-black w-full h-9 text-black p-2 bg-white"
                                    {...register("nome", {required: true})}
                                />
                            </div>
                            <div className={`w-full flex flex-col text-white gap-1 items-start `}>
                                <span className="text-black">Email</span>
                                <input 
                                    className="rounded-lg border-2 border-black w-full h-9 text-black p-2 bg-white"
                                    {...register("email", {required: true})}
                                />
                            </div>
                            <div className={`w-full flex flex-col text-white gap-1 items-start `}>
                                <span className="text-black">Nome</span>
                                <input 
                                    className="rounded-lg border-2 border-black w-full h-9 text-black p-2 bg-white"
                                    {...register("desc", {required: true})}
                                />
                            </div>
                            <button type="submit" form="contato" className="bg-[#648374] mt-4">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4 px-4">
                <div className="max-w-[1366px] w-full">
                    <h1 className="text-[#355245]" >Informações de contato</h1>
                    <div className="px-12">
                        telefone email endereço horario de funcionamento
                    </div>
                </div>
            </div>
        </div>
    )
}
