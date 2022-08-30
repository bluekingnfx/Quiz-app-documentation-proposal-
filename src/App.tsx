import { ParentComponent } from "./components/rootFiles/ParentComp"
import { ThemeContextWrapper } from "./context/ThemeContext"
import { ThemeDeciderContextWrapper } from "./context/ThemeDeclarationContext"



const App = () => {
  const themeLc = localStorage.getItem("NFXQuizThemeSetting")
    if(themeLc === null) localStorage.setItem("NFXQuizThemeSetting","Light")
  return <ThemeDeciderContextWrapper>
    <ThemeContextWrapper>
      <ParentComponent/>
    </ThemeContextWrapper>
  </ThemeDeciderContextWrapper>
}


export default App