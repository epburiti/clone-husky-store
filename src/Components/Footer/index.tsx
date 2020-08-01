import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <footer className="">
        <div className="">
          <div className="mainDivFooter">
            <div className="logos-footer">
              <img className="hyperx-footer" src="https://static.kabum.com.br/conteudo/whitelabel/102/hyperx-color.png" alt=""/>
                <hr/>
                  <div className="kabum-footer">
                    <span>Powered by:</span>
                    <img src="https://static.kabum.com.br/conteudo/whitelabel/rodape/kabum-color.png" alt=""/>
                  </div>
                  </div>
                  <div className="pagamento-footer">
                    <div className="estiloCartoes">
                      <p>Formas de pagamento</p>
                      <div><div>
                        <img src="https://static.kabum.com.br/conteudo/whitelabel/rodape/rodape-mastercard.png" alt=""/>
                              </div><div><img src="https://static.kabum.com.br/conteudo/whitelabel/rodape/rodape-visa.png" alt=""/>
                                </div><div><img src="https://static.kabum.com.br/conteudo/whitelabel/rodape/rodape-elo.png" alt=""/>
                                  </div><div><img src="https://static.kabum.com.br/conteudo/whitelabel/rodape/rodape-amex.png" alt=""/>
                                    </div>
                              <div>
                                <img src="https://static.kabum.com.br/conteudo/whitelabel/rodape/rodape-diners.png" alt=""/>
                                        </div>
                                <div>
                                  <img src="https://static.kabum.com.br/conteudo/whitelabel/rodape/rodape-hipercard.png" alt=""/>
                                            </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="regras">
                          <ul>
                            <li>
                              <a href="/politicas#site">Políticas do site</a>
                            </li>
                            <li>
                              <a href="/politicas#privacidade">Políticas de privacidade</a>
                            </li>
                            <li>
                              <a href="//www.kabum.com.br/cgi-local/site/minha_conta/minha_conta.cgi?menu=regretment">Direito de arrependimento</a>
                            </li>
                            <li>
                              <a href="//www.kabum.com.br/cgi-local/site/atendimento/chat/chat.cgi">Fale conosco</a>
                            </li>
                            <li>
                              <a href="https://www.kabum.com.br/download/cdc/CODIGO_DE_DEFESA_DO_CONSUMIDOR.zip">Código de defesa do consumidor</a>
                            </li>
                            <li>
                              <a href="https://husky.com.br/downloads/" target="_blank" rel="noreferrer">Downloads</a>
                            </li>
                          </ul>
                          <p>Atendimento de 09h00 às 19h00 (segunda à sexta-feira), horário de Brasília (exceto feriados).</p><p>Endereço postal: Rua Carlos Gomes, 1321 - 9º andar, Centro, Limeira - SP, CEP: 134810-010.</p>
                          <strong><p className="bold">© 2003-2020, KaBuM! Comércio Eletrônico S.A.</p></strong>
                        </div>
                       
      </footer>
    </Container>
  );
}

export default Footer;