import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';

import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcon,
  SocialIcons,
  SocialIconLink,
} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Junte-se à nossa assinatura exclusiva para receber as últimas notícias
          e tendências
        </FooterSubHeading>
        <FooterSubText>
          Você pode cancelar a assinatura a qualquer momento.
        </FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Seu Email" />
          <Button fontBig>Se inscrever</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Sobre nós</FooterLinkTitle>
            <FooterLink to="/sign-up">Como funciona</FooterLink>
            <FooterLink to="/">Testemunhos</FooterLink>
            <FooterLink to="/">Carreiras</FooterLink>
            <FooterLink to="/">Investidores</FooterLink>
            <FooterLink to="/">Termos de serviço</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Contate-Nos</FooterLinkTitle>
            <FooterLink to="/sign-up">Contato</FooterLink>
            <FooterLink to="/">Suporte</FooterLink>
            <FooterLink to="/">Destinos</FooterLink>
            <FooterLink to="/">patrocínios</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>

        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/sign-up">Enviar Vídeo</FooterLink>
            <FooterLink to="/">Embaixadores</FooterLink>
            <FooterLink to="/">agência</FooterLink>
            <FooterLink to="/">influenciador</FooterLink>
            <FooterLink to="/">Colaboradores</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Mídia social</FooterLinkTitle>
            <FooterLink to="/sign-up">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            UAGENCY
          </SocialLogo>
          <WebsiteRights>UAGENCY © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
