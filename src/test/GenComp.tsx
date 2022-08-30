export type ProfileProps = {name:string}

export const GenComp = ({name}:ProfileProps) => {
    return <>
        <div>
            {name}
        </div>
    </>
}