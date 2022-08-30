import { 
    HeadingPreRegisContainer, 
    PreRegisContainerMC, 
    PreRegisParentContainerMC,
    DescriptionToPreRegisContainer,
    EmailBoxNButContainerSPC,
    EmailBoxContainerSPC,
    EmailBoxSPC,
    EmailPreRegisButContainerSPC,
    EmailPreRegisButSPC
} from "../../../styles/Styles"




export const MaxCompForPreRegis = () => {
    return <PreRegisParentContainerMC>
        <PreRegisContainerMC>
            <HeadingPreRegisContainer>
                Pre-Register
            </HeadingPreRegisContainer>
            <DescriptionToPreRegisContainer>
                Thanks for showing interest in our premium offers. By registering, you will be intimated with a mail to your email whenever the premium features drops. You could gladly buy the premium account and enjoy the benefits come along with it.
            </DescriptionToPreRegisContainer>
            <EmailBoxNButContainerSPC>
                <EmailBoxContainerSPC>
                    <EmailBoxSPC 
                        placeholder="E-mail"
                        type={"text"}
                    />

                    <EmailPreRegisButContainerSPC>
                        <EmailPreRegisButSPC>
                            Pre-register
                        </EmailPreRegisButSPC>
                    </EmailPreRegisButContainerSPC>

                </EmailBoxContainerSPC>
            </EmailBoxNButContainerSPC>
        </PreRegisContainerMC>
    </PreRegisParentContainerMC>
} 