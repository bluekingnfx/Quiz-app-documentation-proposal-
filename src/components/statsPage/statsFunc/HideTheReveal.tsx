

export const HideTheReveal = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const tar = e.target as HTMLDivElement
    if(tar) tar.style.display  = "none"
}