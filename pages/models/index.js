import { useContext, useEffect, useRef } from "react"
import { openMenu, closeMenu } from "../../components/animations/animations"
import { NavbarContext } from "../../components/context/NavbarContext"
import { ModelSection, ModelBg, ModelsHeader } from "../../components/styles/models.style"

const ModelsPage = () => {
    const { value } = useContext(NavbarContext)
    const modelRef = useRef(null)
    const bgRef = useRef(null)

    useEffect(() => {
        value ? closeMenu(modelRef, bgRef) : openMenu(modelRef, bgRef)
    }, [])

    return (
        <>
            <ModelSection value={value} ref={modelRef}>
                <ModelBg ref={bgRef}>
                    <ModelsHeader>models</ModelsHeader>
                </ModelBg>
            </ModelSection>
        </>
    )
}

export default ModelsPage