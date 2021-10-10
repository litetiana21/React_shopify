import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: #0f0f0f;
  bottom: 0;
  margin-bottom:-4rem;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  // margin-left: 60px; 
  width: auto;
  @media (max-width: 768px) {
    text-align: center !important;
    align-items:center;
  }
`;

export const CustomRow = styled.div`
  display: grid;
  justify-content:center;
  display:flex;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 23%;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(300px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #FFFF;
  text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
   
  &:hover {
    opacity: 0.8;
    color: #FFFF;
  }
`;

export const Heading = styled.p`
  // font-size: 24px;
  color: #FFFF;
  margin-bottom: 40px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Driver = styled.hr`
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(156, 163, 175, var(--tw-border-opacity));
  border-style: solid;
  @media only screen and (max-width: 1224px) {  
    width: 0% !important;
  }
  width: 100%;
`;

export const FooterText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: #FFFF;
`;

// const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
export const SubscribeForm = styled.form`
  margin-top: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  max-width: 24rem;
  // margin-left: auto;
  // margin-rigth: auto;
`;

export const Input = styled.input`
  --tw-bg-opacity: 1;
  background-color: rgba(209, 213, 219, var(--tw-bg-opacity));
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-radius: 0.25rem;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(156, 163, 175, var(--tw-border-opacity));
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  width:75%;
  border-right: none;
  line-height: inherit;
  font-weigth: 600;
  color: inherit;
  &:hover{
    --tw-border-opacity: 1;
    border-color: rgba(100,21,255,var(--tw-border-opacity)) !important;
  }
`;

export const SubscribeButton = styled.button`
  margin-top: 1rem;
  width: 25%;
  border-left: none;
  border-radius: 0.25rem;
  border-color:#6415FF;
  border-weigth: 0;
  text-align: center;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color:#6415FF;
  color: white;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const LogoImg = styled.img`width: 4rem;`;

export const LogoText = styled.h5`
  // margin-left: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
`;

export const CopywrightNotice = styled.p`
  text-align: center !important;
  font-size: 0.875rem !important;
  line-height: 1.25rem !important;
  margin-top: 1rem !important;
  font-weight: 500 !important;
  --tw-text-opacity: 1;
    color: #FFFF;
`;

export const SocialLink = styled.a`
  cursor: pointer;
  padding: 0.5rem;
  margin:3px;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(243, 244, 246, var(--tw-text-opacity));
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  text-align: center;
  &:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(55, 65, 81, var(--tw-bg-opacity));
  }
  svg{
    width: 1rem;
    heigth: 1rem;
    color:white;
  }
`;

// export const SocialLink = styled.svg`
//   width: 1rem;
//   heigth: 1rem;
// `;
