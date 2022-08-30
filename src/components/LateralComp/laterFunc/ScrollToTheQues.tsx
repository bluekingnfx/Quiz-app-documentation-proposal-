export const ScrollToTheQues = (i:number) => {
    const element = document.getElementById(`Ques${i-1}`) as HTMLDivElement | null
    if(element !== null) element.scrollIntoView({behavior: 'smooth'})
}