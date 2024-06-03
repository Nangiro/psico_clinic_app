import { useForm } from "react-hook-form";
import Carousel from "../components/Carousel"
import { Button } from "../components/Button";
import { Facebook, Instagram, Linkedin } from "react-feather";
import { router } from '@inertiajs/react'

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

    const onSubmit = (data) => {
        router.post('/mail/form', data)
    };

    return (
        <div className="w-full bg-background text-bodyText">
            <div className="flex justify-center h-12">
                <div className="flex w-full max-w-[1366px] items-center justify-between h-full">
                    <p className="font-bold text-2xl font-['poppins']">Clinica bem estar</p>
                    <div className="flex">
                        <p className="mr-4 font-['poppins']">Home</p>
                        <p className="mr-4 font-['poppins']">Nossos serviços</p>
                        <p className="mr-4 font-['poppins']">Quem somos</p>
                        <p className="mr-4 font-['poppins']">Depoimentos</p>
                        <p className="mr-4 font-['poppins']">Formulario de contato</p>
                        <p className="mr-4 font-['poppins']">Informações de contato</p>
                        <p className="font-['poppins']">Entrar</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <img className="w-full max-w-[1366px]" src="https://cdn.pixabay.com/photo/2019/05/27/07/26/mental-health-4232031_1280.jpg" />
            </div>
            <div className=" flex justify-center items-center mt-20">
                <div className="max-w-[1366px]">
                    <div className="justify-between flex">
                        <div className="bg-white shadow-xl  w-72 rounded-xl p-6">
                            <h2 className="text-[24px] font-poppins font-bold text-center">Terapia Junguiana</h2>
                            <p className="mt-4 font-roboto">
                                Mussum Ipsum, cacilds vidis litro abertis.  Quem num gosta di mim que vai caçá sua turmis! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Quem manda na minha terra sou euzis!
                            </p>
                        </div>
                        <div className="bg-white shadow-xl w-72 rounded-xl p-6">
                            <h2 className="text-[24px] font-poppins font-bold text-center">Terapia Behaviorista</h2>
                            <p className="mt-4 font-roboto">
                                Mussum Ipsum, cacilds vidis litro abertis.  Quem num gosta di mim que vai caçá sua turmis! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Quem manda na minha terra sou euzis!
                            </p>
                        </div>
                        <div className="bg-white shadow-xl w-72 rounded-xl p-6">
                            <h2 className="text-[24px] font-poppins font-bold text-center">Humanismo</h2>
                            <p className="mt-4 font-roboto">
                                Mussum Ipsum, cacilds vidis litro abertis.  Quem num gosta di mim que vai caçá sua turmis! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Quem manda na minha terra sou euzis!
                            </p>
                        </div>
                        <div className="bg-white shadow-xl w-72 rounded-xl p-6">
                            <h2 className="text-[24px] font-poppins font-bold text-center">Terapia Psicanalítica</h2>
                            <p className="mt-4 font-roboto">
                                Mussum Ipsum, cacilds vidis litro abertis.  Quem num gosta di mim que vai caçá sua turmis! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Quem manda na minha terra sou euzis!
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-[160px] items-center">
                        <div className="max-w-[720px] w-full">
                            <h1 className="font-bold font-poppins">Quem somos</h1>
                            <p className="mt-8 font-roboto">Mussum Ipsum, cacilds vidis litro abertis.  Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosta di mim que vai caçá sua turmis! Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                            <p className="font-roboto">Diuretics paradis num copo é motivis de denguis. Leite de capivaris, leite de mula manquis sem cabeça. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Mé faiz elementum girarzis, nisi eros vermeio.</p>
                            <Button className="bg-[#35C9B6] mt-2 text-white font-poppins" label="Saiba mais" />
                        </div>
                        <img className="w-full max-w-[480px]" src="https://cdn.pixabay.com/photo/2018/04/25/22/49/brain-3350799_1280.png" />
                    </div>

                    <div className="flex justify-center mt-20">
                        <div className="max-w-[1366px] w-full">
                            {/* <h1 className="font-bold font-poppins text-bodyText" >O que falam sobre nós</h1> */}
                            <div className="px-12">
                                <Carousel cards={cards} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-28">
                        <div className="w-full">
                            <h1 className="font-bold font-poppins" >Fale conosco</h1>
                            {/* <div className="flex justify-center items-center"> */}
                            <form className="text-black" onSubmit={handleSubmit(onSubmit)} id="contato">
                                <div className="flex mt-6 gap-8 mb-2">
                                    <div className={`w-full flex flex-col text-white gap-1 items-start `}>
                                        <span className="text-black font-roboto">Nome</span>
                                        <input
                                            className="rounded-lg border-2 border-black w-full h-9 text-black p-2 bg-background font-roboto"
                                            {...register("nome", { required: true })}
                                        />
                                    </div>
                                    <div className={`w-full flex flex-col text-white gap-1 items-start`}>
                                        <span className="text-black font-roboto">Email</span>
                                        <input
                                            className="rounded-lg border-2 border-black w-full h-9 text-bodyText p-2 bg-background"
                                            {...register("email", { required: true })}
                                        />
                                    </div>
                                </div>
                                <div className={`w-full flex flex-col text-white gap-1 items-start `}>
                                    <span className="text-black">Mensagem</span>
                                    <input
                                        className="rounded-lg border-2 border-black w-full h-9 text-black p-2 bg-background"
                                        {...register("desc", { required: true })}
                                    />
                                </div>
                                <button className="bg-[#35C9B6] mt-4 text-white font-poppins" type="submit" form="contato">
                                    Enviar
                                </button>
                            </form>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-20 border-solid border-t border-[#35C9B6] pb-4">
                <div className="max-w-[1366px] w-full flex justify-between">
                    <div>
                        <div className="mt-4">
                            <p className="font-poppins text-bodyText text-[12px] font-bold">Contato</p>
                            <p className="font-roboto text-bodyText text-[14px]">(19)3333-3333</p>
                        </div>
                        <div className="mt-2">
                            <p className="font-poppins text-bodyText text-[12px] font-bold">Endereço</p>
                            <p className="font-roboto text-bodyText text-[14px]">Rua Orosimbo Maia, 237 - Campinas/SP</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="mt-2">
                            <p className="font-poppins text-bodyText text-[12px] font-bold">Funcionamento</p>
                            <p className="font-roboto text-bodyText text-[14px]">Seg - Sex: 09:00 às 18:00</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex mt-4">
                            <Facebook />
                            <p className="font-roboto text-bodyText text-[14px] ml-4">/Clinicabemestar</p>
                        </div>
                        <div className="flex mt-4">
                            <Instagram />
                            <p className="font-roboto text-bodyText text-[14px] ml-4">@Clinicabemestar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
