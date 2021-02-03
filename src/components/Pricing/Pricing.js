import { Button } from '../../globalStyles';
import { GiCrystalBars, GiCutDiamond } from 'react-icons/gi';
import { GiCutDiamong, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingCard,
  PricingCardCost,
  PricingCardIcon,
  PricingCardInfo,
  PricingCardPlan,
  PricingContainer,
  PricingHeading,
  PricingSection,
  PricingWrapper,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from './Pricing.elements';

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Nossos Serviços</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>R$99.99</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 Novos Usuarios</PricingCardFeature>
                  <PricingCardFeature>Orçamento de R$10,000</PricingCardFeature>
                  <PricingCardFeature>
                    Análise de retargeting
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escolha o plano</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>R$299.99</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 Novos Usuarios</PricingCardFeature>
                  <PricingCardFeature>Orçamento de R$50,000</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escolha o plano</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamong Kings</PricingCardPlan>
                <PricingCardCost>R$999.99</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Usuarios Ilimitados</PricingCardFeature>
                  <PricingCardFeature>Orçamento ilimitado</PricingCardFeature>
                  <PricingCardFeature>24/7 Suporte</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escolha o plano</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
