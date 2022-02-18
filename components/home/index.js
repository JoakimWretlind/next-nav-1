import { useContext } from "react"
import { NavbarContext } from "../context/NavbarContext"
import { Section, Header } from "./home.style"

export const HomePage = () => {
    const { value, setValue } = useContext(NavbarContext)

    console.log(value)

    return (
        <>
            <Section>
                <Header>home</Header>
            </Section>
        </>
    )
}
