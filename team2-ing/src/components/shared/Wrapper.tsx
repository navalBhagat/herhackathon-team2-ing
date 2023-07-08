import { Footer } from "./Footer"
import { Header } from "./Header"

type Props = { 
    children?: React.ReactNode;
}

export const Wrapper: React.FC<Props> = (props) => {
  return (
    <div>
        <Header /> 
        {props.children}
        <Footer />
    </div>
  )
}
