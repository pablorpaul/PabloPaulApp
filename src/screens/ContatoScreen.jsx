import { Link } from "react-router-dom";
export default function ContatoScreen(){
    return (
        <main>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="pricing-header p-3 pb-md-4 mx-auto text-center">Contatos</h1>
                <p className="fs-5 text-body-secondary">Sinta-se livre para tirar dúvidas sobre nossos planos ou sobre nossa empresa em qualquer uma das nossas redes socias ou em nosso email.</p>
                <div className="row text-start">
                    <ul className="list-unstyled text-small">
                        <li className="mb-1">
                            <Link className="link-secondary text-decoration-none" to="https://www.instagram.com/">Instagram</Link>
                        </li>
                        <li>
                            <Link className="link-secondary text-decoration-none" to="https://www.facebook.com/">Facebook</Link>
                        </li>
                        <li>
                            <Link className="link-secondary text-decoration-none" to="https://www.whatsapp.com/">WhatsApp</Link>
                        </li>
                        <li>
                            <Link className="link-secondary text-decoration-none" to="https://www.google.com/intl/pt-BR/gmail/about/">contatoMoreComics@email.com</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}