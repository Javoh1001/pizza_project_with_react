import React from 'react';

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMeidaWrap,
    SocailLogo,
    SocialIcons,
    SocialIconLink,
} from './FooterStyle';

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMeidaWrap>
                        <SocailLogo to="/">Pizza</SocailLogo>
                        <SocialIcons>
                            <SocialIconLink href="" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMeidaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
