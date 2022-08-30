import { 
    ErrorContainerQc,
    ErrorParentContainerQC,
    ErrorQC 
} from "../../../styles/Styles"

export const ErrorComp = ({err}:{err:string }) => {
    return <ErrorParentContainerQC>
        <ErrorContainerQc>
            <ErrorQC>
                {err}
            </ErrorQC>
        </ErrorContainerQc>
    </ErrorParentContainerQC>
}