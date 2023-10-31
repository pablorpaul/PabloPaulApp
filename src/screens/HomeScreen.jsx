export default function HomeScreen(){

    return (
        <main>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Bem Vindo a More Comics</h1>
                <p className="lead">"Somos uma empresa de assinatura, que mensalmente entrega uma gama de revistas em quadrinhos para nossos assinantes, assim como alguns brindes extras"</p>
            </div>
            <div>
                <img src="https://www.arteparacaneca.com.br/arte-para-caneca/large/304/quadrinhos-comics-marvel-super-heroi.jpg" alt="" className="imagem"/>
            </div>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Assinaturas</h1>
                <p className="lead">"Nossas assinaturas buscam a expansão e divulgação da arte de ler quadrinhos, o nosso vício que agora se tornara o seu com nossas assinaturas, escolha a melhor para você"</p>
            </div>  
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Robin</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">
                                R$79,99
                                <small className="text-body-secondary fw-light">/mês</small>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>3 revistas por mes</li>
                                <li>Poster exclusivo</li>
                                <li>Camisa geek</li>
                            </ul>
                            <button className="w-100 btn btn-lg btn-outline-primary">Assinar</button>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Batman</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">
                            R$139,99
                                <small className="text-body-secondary fw-light">/mês</small>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>5 revistas por mes</li>
                                <li>Poster exclusivo</li>
                                <li>Camisa geek</li>
                                <li>Item de colecionador</li>
                            </ul>
                            <button className="w-100 btn btn-lg btn-outline-primary">Assinar</button>

                        </div>
                    </div>
                </div>  
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Super-Homem</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">
                                R$249,99
                                <small className="text-body-secondary fw-light">/mês</small>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>7 revistas por mes</li>
                                <li>Poster exclusivo</li>
                                <li>Camisa geek</li>
                                <li>Item de colecionador</li>
                                <li>FunkoPop</li>
                            </ul>
                            <button className="w-100 btn btn-lg btn-outline-primary">Assinar</button>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}